import { RelType } from "@prisma/client";
import React from "react";
import styles from "./RelLegend.module.css";

interface RelLegendProps {
  reltypes: {
    id: number;
    name: string;
    hexCode: string;
    textCode: string;
  }[];
}

const RelLegend = ({ reltypes }: RelLegendProps) => {
  return (
    <div className={styles.legendTable}>
      {reltypes.map((reltype, index) => {
        return (
          <div key={index} className={styles.legendItem}>
            <div className={styles.legendPair}>
              <div
                className={styles.legendButton}
                style={{
                  ["--color-button" as any]: reltype.hexCode,
                  ["--text-button" as any]: reltype.textCode,
                }}
              >
                {reltype.name.substring(0, 1)}
              </div>
              <p className={styles.legendTitle}>{reltype.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RelLegend;
