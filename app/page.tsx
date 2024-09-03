import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bar } from "recharts";
import { LineChartFull } from "./components/lineChart";
import { CompaniesList } from "./components/list";
export default function Home() {
  return (
    <>
      <main className="px-2 lg:px-0 mx-auto min-h-screen container">
        <LineChartFull />
        <CompaniesList />
      </main>
    </>

  );
}
