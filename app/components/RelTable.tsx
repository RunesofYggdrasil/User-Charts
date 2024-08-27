"use client";

import React, { useState } from "react";
import RelTypeButton from "./RelTypeButton";

interface RelTableProps {
  characters: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
  reltypes: {
    id: number;
    name: string;
    hexCode: string;
    textCode: string;
  }[];
}

const RelTable = ({ characters, reltypes }: RelTableProps) => {
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
  return (
    <table>
      <tbody>
        <tr>
          <th>CROWSEE</th>
          {characters.map((character) => {
            return (
              <th key={"h" + character.id}>
                {character.firstName} {character.lastName.substring(0, 1)}.
              </th>
            );
          })}
        </tr>
        {characters.map((characterTwo, indexTwo) => {
          return (
            <tr key={"r" + characterTwo.id}>
              <th>
                {characterTwo.firstName} {characterTwo.lastName.substring(0, 1)}
                .
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
  );
};

export default RelTable;
