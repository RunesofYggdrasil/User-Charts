import { Suspense } from "react";
import RelChart from "./components/RelChart";
import Loading from "./components/Loading";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RelChart chartId={5} />
      </Suspense>
      <p>hi</p>
    </>
  );
}
