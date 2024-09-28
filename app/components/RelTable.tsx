"use client";

import React, { useState } from "react";
import RelTypeButton from "./RelTypeButton";
import Loading from "./Loading";
import { handleSubmit } from "@/lib/actions";
import RelLegend from "./RelLegend";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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

function onSubmit(
  tableButtons: [number, React.Dispatch<React.SetStateAction<number>>][][],
  reltypes: { id: number; name: string; hexCode: string; textCode: string }[],
  characters: { id: number; firstName: string; lastName: string }[],
  setPostVoteBody: React.Dispatch<React.SetStateAction<string>>,
  router: AppRouterInstance,
  pathname: string,
  setIsChartVisible: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsChartVisible(false);
  const votes = handleSubmitGatherVotes(tableButtons, reltypes, characters);
  setPostVoteBody(JSON.stringify({ votes }));
  router.push(pathname + "?view=read-only");
}

const RelTable = ({ characters, reltypes }: RelTableProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const [isChartVisible, setIsChartVisible] = useState(view != "read-only");

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
        <RelLegend reltypes={reltypes} />
        {isChartVisible && (
          <form action={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th>CROWSEE</th>
                  {characters.map((character) => {
                    return (
                      <th key={"h" + character.id}>
                        {character.firstName}{" "}
                        {character.lastName.substring(0, 1)}.
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
                onSubmit(
                  tableButtons,
                  reltypes,
                  characters,
                  setPostVoteBody,
                  router,
                  pathname,
                  setIsChartVisible
                );
              }}
            >
              SUBMIT
            </button>
          </form>
        )}
        {!isChartVisible && (
          <div>
            <p>You have already voted.</p>
          </div>
        )}
      </>
    );
  } else {
    return <Loading />;
  }
};

export default RelTable;
