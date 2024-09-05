"use client"
import { useState } from "react";
import { ChartCard } from "./components/chartCard";
import { CompaniesList } from "./components/list";
// import { PieChartComponent } from "./components/pieChart";
// import { BarChartComponent } from "./components/barChart";
// import { RenderBarChart, RenderLineChart } from "./components/sample";
export default function Home() {
  const [stock, setStock] = useState<string>("AAPL")
  return (
    <>
      <main className="px-2 lg:px-0 mx-auto min-h-screen container">
        <ChartCard stock={stock} />
        <CompaniesList setStock={setStock} />
        {/* <RenderLineChart /> */}
        {/* <RenderBarChart /> */}
      </main >
    </>

  );
}
