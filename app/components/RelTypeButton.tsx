"use client";

import React, { useState } from "react";
import styles from "./RelTypeButton.module.css";

interface RelTypeProps {
  position: {
    x: number;
    y: number;
  };
  reltypes: {
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

const RelTypeButton = ({ position, reltypes }: RelTypeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <button
      type="button"
      className={styles.reltypeButton}
      id={"x" + position.x + "y" + position.y + "-" + currentIndex}
      onClick={() => {
        handleClick(currentIndex, setCurrentIndex, reltypes.length);
      }}
      style={{
        ["--color-button" as any]: "#" + reltypes[currentIndex].hexCode,
        ["--text-button" as any]: "#" + reltypes[currentIndex].textCode,
      }}
    >
      {reltypes[currentIndex].name.substring(0, 1)}
    </button>
  );
};

export default RelTypeButton;
