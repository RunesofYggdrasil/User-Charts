"use server";

import React, { Suspense } from "react";
import fetchAPI from "../api/fetch";
import RelTable from "./RelTable";
import Loading from "./Loading";

interface RelChartProps {
  chartId: number;
}

const RelChart = async ({ chartId }: RelChartProps) => {
  const getCharactersRequest = await fetchAPI(
    "GET",
    "characters/chart/" + chartId,
    ""
  );
  const getReltypesRequest = await fetchAPI(
    "GET",
    "rel_types/chart/" + chartId,
    ""
  );
  return (
    <Suspense fallback={<Loading />}>
      <RelTable
        characters={getCharactersRequest.characters}
        reltypes={getReltypesRequest.relTypes}
      />
    </Suspense>
  );
};

export default RelChart;
