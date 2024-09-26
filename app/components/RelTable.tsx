"use client";

import React, { FormEvent, useEffect, useState } from "react";
import RelTypeButton from "./RelTypeButton";
import fetchAPI from "../api/fetch";
import Loading from "./Loading";
import { handleSubmit } from "@/lib/actions";

interface RelTableProps {
  characters:
    | {
        id: number;
        firstName: string;
        lastName: string;
      }[]
    | undefined;
  reltypes:
    | {
        id: number;
        name: string;
        hexCode: string;
        textCode: string;
      }[]
    | undefined;
}

type Vote = {
  reltypeId: number;
  characterOneId: number;
  characterTwoId: number;
};

function handleSubmitGatherVotes(
  values: [number, React.Dispatch<React.SetStateAction<number>>][][],
  reltypes: { id: number; name: string; hexCode: string; textCode: string }[],
  characters: { id: number; firstName: string; lastName: string }[]
): Vote[] {
  const votes: Vote[] = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      const reltype = values[i][j][0];
      const vote: Vote = {
        reltypeId: reltypes[reltype].id,
        characterOneId: characters[i].id,
        characterTwoId: characters[i + j].id,
      };
      votes.push(vote);
    }
  }
  return votes;
}

const RelTable = ({ characters, reltypes }: RelTableProps) => {
  if (characters && reltypes) {
    const tableButtons: [
      number,
      React.Dispatch<React.SetStateAction<number>>
    ][][] = [];
    for (let i = 0; i < characters.length; i++) {
      const tableButtonsRow = [];
      for (let j = i; j < characters.length; j++) {
        const tableButtonIndex = useState(0);
        tableButtonsRow.push(tableButtonIndex);
      }
      tableButtons.push(tableButtonsRow);
    }
    const [postVoteBody, setPostVoteBody] = useState("");
    return (
      <>
        <form action={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>CROWSEE</th>
                {characters.map((character) => {
                  return (
                    <th key={"h" + character.id}>
                      {character.firstName} {character.lastName.substring(0, 1)}
                      .
                    </th>
                  );
                })}
              </tr>
              {characters.map((characterTwo, indexTwo) => {
                return (
                  <tr key={"r" + characterTwo.id}>
                    <th>
                      {characterTwo.firstName}{" "}
                      {characterTwo.lastName.substring(0, 1)}.
                    </th>
                    {characters.map((characterOne, indexOne) => {
                      const [currentIndex, setCurrentIndex] =
                        indexOne >= indexTwo
                          ? tableButtons[indexTwo][indexOne - indexTwo]
                          : tableButtons[indexOne][indexTwo - indexOne];
                      return (
                        <td key={"d" + characterOne.id}>
                          <RelTypeButton
                            index={{ currentIndex, setCurrentIndex }}
                            position={{
                              x: indexOne,
                              y: indexTwo,
                              id1: characterOne.id,
                              id2: characterTwo.id,
                            }}
                            reltypes={reltypes}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <input type="hidden" value={postVoteBody} name="postVoteBody" />
          <button
            type="submit"
            onClick={() => {
              const votes = handleSubmitGatherVotes(
                tableButtons,
                reltypes,
                characters
              );
              setPostVoteBody(JSON.stringify({ votes }));
            }}
          >
            SUBMIT
          </button>
        </form>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default RelTable;
