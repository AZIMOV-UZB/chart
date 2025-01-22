import { Component } from "@/components/area-chart";
import { Chart } from "@/components/chart";
import { Piechart } from "@/components/pie-chart";

export default function Home() {
  return (
    <div className="container max-w-[1250px] mx-auto">
      <Piechart />
      <Chart />
      <Component />
    </div>
  );
}
