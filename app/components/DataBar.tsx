import React from "react";
import Loading from "./Loading";

interface DataBarProps {
  values: {
    hex: string;
    count: number;
  }[];
}

const DataBar = ({ values }: DataBarProps) => {
  if (values) {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
      total += values[i].count;
    }
    return (
      <div>
        {values.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                width: (value.count / total) * 100 + "%",
                backgroundColor: value.hex,
              }}
            ></div>
          );
        })}
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default DataBar;
