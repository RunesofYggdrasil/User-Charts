"use server";

import React, { Suspense } from "react";
import DataBar from "./DataBar";
import fetchAPI from "../api/fetch";
import { Pairing, RelType, RelValuesForPairings } from "@prisma/client";
import Loading from "./Loading";

interface RelDataProps {
  chartId: number;
}

type value = {
  hex: string;
  count: number;
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
  const relValuesCompletion = new Promise((resolve) => {
    relValuesForPairing.forEach(async (relValue, index, array) => {
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
      if (index == array.length - 1) {
        resolve(true);
      }
    });
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
  const relValues: value[][] = [];
  const relValuesCompletion = new Promise((resolve) => {
    pairings.forEach(async (pairing, index, array) => {
      const getRelValuesForPairingRequest = await fetchAPI(
        "GET",
        "rel_values_for_pairings/pairing/" + pairing.id,
        ""
      );
      const relValuesForPairing: { hex: string; count: number }[] =
        await handleSortRelValuesForPairings(
          getRelValuesForPairingRequest.relValuesForPairing
        );
      relValues.push(relValuesForPairing);
      if (index == array.length - 1) {
        resolve(true);
      }
    });
  });
  const complete = await relValuesCompletion;
  if (complete) {
    return (
      <Suspense fallback={<Loading />}>
        <div>
          {relValues.map((relValue, index) => {
            return <DataBar key={index} values={relValue} />;
          })}
        </div>
      </Suspense>
    );
  } else {
    return <Loading />;
  }
};

export default RelData;
