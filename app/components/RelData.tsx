"use server";

import React, { Suspense } from "react";
import DataBar from "./DataBar";
import fetchAPI from "../api/fetch";
import { Pairing, RelType, RelValuesForPairings } from "@prisma/client";
import Loading from "./Loading";

interface RelDataProps {
  chartId: number;
}

function handleSortRelValuesForPairings(
  relTypes: RelType[],
  relValuesForPairing: RelValuesForPairings[]
) {
  relTypes.sort((relOne, relTwo) => {
    if (relOne.id > relTwo.id) {
      return 1;
    } else {
      return -1;
    }
  });
  relValuesForPairing.sort((relvalOne, relvalTwo) => {
    if (relvalOne.reltypeId > relvalTwo.reltypeId) {
      return 1;
    } else {
      return -1;
    }
  });
  const values: { hex: string; count: number }[] = [];
  relValuesForPairing.forEach((relValue, index) => {
    const value = {
      hex: relTypes[index + 1].hexCode,
      count: relValue.value,
    };
    values.push(value);
  });
  return values;
}

const RelData = async ({ chartId }: RelDataProps) => {
  const getPairingsRequest = await fetchAPI(
    "GET",
    "pairings/chart/" + chartId,
    ""
  );
  const getRelTypesRequest = await fetchAPI(
    "GET",
    "rel_types/chart/" + chartId,
    ""
  );
  const relValues: { hex: string; count: number }[][] = [];
  getPairingsRequest.pairings.forEach(async (pairing: Pairing) => {
    const getRelValuesForPairingRequest = await fetchAPI(
      "GET",
      "rel_values_for_pairings/pairing/" + pairing.id,
      ""
    );
    const relValuesForPairing: { hex: string; count: number }[] =
      handleSortRelValuesForPairings(
        getRelTypesRequest.relTypes,
        getRelValuesForPairingRequest.relValuesForPairing
      );

    relValues.push(relValuesForPairing);
  });
  return (
    <Suspense fallback={<Loading />}>
      <div>
        {relValues.map((relValue, index) => {
          return <DataBar key={index} values={relValue} />;
        })}
      </div>
    </Suspense>
  );
};

export default RelData;
