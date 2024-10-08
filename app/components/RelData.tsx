"use server";

import React, { Suspense } from "react";
import DataBar from "./DataBar";
import fetchAPI from "../api/fetch";
import { Character, Pairing, RelValuesForPairings } from "@prisma/client";
import Loading from "./Loading";
import styles from "./RelData.module.css";

interface RelDataProps {
  chartId: number;
}

type value = {
  hex: string;
  count: number;
};

type pair = {
  characterOne: Character;
  characterTwo: Character;
  values: value[];
};

async function handleSortRelValuesForPairings(
  relValuesForPairing: RelValuesForPairings[]
) {
  relValuesForPairing.sort((relvalOne, relvalTwo) => {
    if (relvalOne.reltypeId > relvalTwo.reltypeId) {
      return 1;
    } else {
      return -1;
    }
  });
  const values: value[] = [];
  const relValuesCompletion = new Promise(async (resolve) => {
    if (relValuesForPairing && relValuesForPairing.length > 0) {
      for (const relValue of relValuesForPairing) {
        const getRelTypeRequest = await fetchAPI(
          "GET",
          "rel_types/" + relValue.reltypeId,
          ""
        );
        const value = {
          hex: getRelTypeRequest.relType.hexCode,
          count: relValue.value,
        };
        values.push(value);
      }
    }
    resolve(true);
  });
  const complete = await relValuesCompletion;
  if (complete) {
    return values;
  } else {
    return [];
  }
}

const RelData = async ({ chartId }: RelDataProps) => {
  const getPairingsRequest = await fetchAPI(
    "GET",
    "pairings/chart/" + chartId,
    ""
  );
  const pairings: Pairing[] = getPairingsRequest.pairings;
  const relValues: pair[] = [];
  const relValuesCompletion = new Promise(async (resolve) => {
    if (pairings && pairings.length > 0) {
      for (const pairing of pairings) {
        const getRelValuesForPairingRequest = await fetchAPI(
          "GET",
          "rel_values_for_pairings/pairing/" + pairing.id,
          ""
        );
        const getCharacterOneRequest = await fetchAPI(
          "GET",
          "characters/" + pairing.characterOneId,
          ""
        );
        const getCharacterTwoRequest = await fetchAPI(
          "GET",
          "characters/" + pairing.characterTwoId,
          ""
        );
        const relValuesForPairing: value[] =
          await handleSortRelValuesForPairings(
            getRelValuesForPairingRequest.relValuesForPairing
          );
        const pair: pair = {
          characterOne: getCharacterOneRequest.character,
          characterTwo: getCharacterTwoRequest.character,
          values: relValuesForPairing,
        };
        relValues.push(pair);
      }
    }
    resolve(true);
  });
  const relValuesSortCompletion = new Promise(async (resolve) => {
    const innerComplete = await relValuesCompletion;
    if (innerComplete) {
      relValues.sort((pairOne, pairTwo) => {
        if (pairOne.characterOne.id > pairTwo.characterOne.id) {
          return 1;
        } else {
          return -1;
        }
      });
      relValues.sort((pairOne, pairTwo) => {
        if (pairOne.characterTwo.id < pairTwo.characterTwo.id) {
          return 1;
        } else {
          return -1;
        }
      });
      relValues.sort((pairOne, pairTwo) => {
        if (pairOne.characterOne.id > pairTwo.characterOne.id) {
          return 1;
        } else {
          return -1;
        }
      });
      resolve(true);
    } else {
      resolve(false);
    }
  });
  const complete = await relValuesSortCompletion;
  if (complete) {
    return (
      <Suspense fallback={<Loading />}>
        <div className={styles.dataGrid}>
          {relValues.map((relValue, index) => {
            return <DataBar key={index} pair={relValue} />;
          })}
        </div>
      </Suspense>
    );
  } else {
    return <Loading />;
  }
};

export default RelData;
