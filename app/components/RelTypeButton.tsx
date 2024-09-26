"use client";

import React from "react";
import styles from "./RelTypeButton.module.css";

interface RelTypeProps {
  index: {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  };
  position: {
    x: number;
    y: number;
    id1: number;
    id2: number;
  };
  reltypes: {
    id: number;
    name: string;
    hexCode: string;
    textCode: string;
  }[];
}

function handleClick(
  value: number,
  setValue: React.Dispatch<number>,
  maxValue: number
) {
  if (value < maxValue - 1) {
    setValue(value + 1);
  } else {
    setValue(0);
  }
  return;
}

const RelTypeButton = ({ index, position, reltypes }: RelTypeProps) => {
  return (
    <button
      type="button"
      className={styles.reltypeButton}
      id={
        "x" +
        position.x +
        "y" +
        position.y +
        "-a" +
        position.id1 +
        "b" +
        position.id2 +
        "-" +
        reltypes[index.currentIndex].id
      }
      onClick={() => {
        handleClick(index.currentIndex, index.setCurrentIndex, reltypes.length);
      }}
      style={{
        ["--color-button" as any]: reltypes[index.currentIndex].hexCode,
        ["--text-button" as any]: reltypes[index.currentIndex].textCode,
      }}
    >
      {reltypes[index.currentIndex].name.substring(0, 1)}
    </button>
  );
};

export default RelTypeButton;
