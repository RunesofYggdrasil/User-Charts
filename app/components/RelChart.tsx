"use server";

import React from "react";
import fetchAPI from "../api/fetch";
import RelTable from "./RelTable";

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
    <RelTable
      characters={getCharactersRequest.characters}
      reltypes={getReltypesRequest.relTypes}
    />
  );
};

export default RelChart;
