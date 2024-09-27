import React from "react";
import Loading from "./Loading";
import styles from "./DataBar.module.css";
import { Character } from "@prisma/client";

interface DataBarProps {
  pair: {
    characterOne: Character;
    characterTwo: Character;
    values: {
      hex: string;
      count: number;
    }[];
  };
}

const DataBar = ({ pair }: DataBarProps) => {
  if (pair && pair.values) {
    let total = 0;
    for (let i = 0; i < pair.values.length; i++) {
      total += pair.values[i].count;
    }
    return (
      <div className={styles.dataBar}>
        <p className={styles.characterName}>{pair.characterOne.firstName}</p>
        <div className={styles.dataBarChart}>
          {pair.values.map((value, index) => {
            const percentage =
              value.count > 0 ? (value.count / total) * 100 : 0;
            return (
              <div
                key={index}
                style={{
                  width: percentage + "%",
                  backgroundColor: value.hex,
                }}
              ></div>
            );
          })}
        </div>
        <p className={styles.characterName}>{pair.characterTwo.firstName}</p>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default DataBar;
