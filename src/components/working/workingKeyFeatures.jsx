import React from "react";
import { ResponsiveLine } from "@nivo/line";

const WorkingKeyFeatures = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-900">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ridecrypt offers a range of innovative features to provide a seamless and secure ride-hailing experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Geofencing</h3>
              <p className="text-gray-400">
                Ridecrypt utilizes geofencing technology to ensure that rides are only initiated and completed within
                designated service areas, providing a secure and reliable experience for all users.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Ethereum L2 Integration</h3>
              <p className="text-gray-400">
                Ridecrypt integrates with Ethereum Layer 2 solutions to provide fast, low-cost, and secure transactions
                for ride payments, ensuring a seamless user experience.
              </p>
            </div>
          </div>
          <div className="">
            <LineChart className="aspect-[16/9]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingKeyFeatures;

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 200 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          tickValues: 6,
          tickColor: "#d1d5db",
          legend: "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 10,
          tickColor: "#d1d5db",
          legend: "Platform charges",
          legendOffset: -35,
          legendPosition: "middle",
        }}
        colors={["#3b82f6", "#ef4444"]}
        pointSize={6}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        gridYValues={6}
        theme={{
          background: "#1f2937", // dark background
          textColor: "#f9fafb", // light text
          axis: {
            domain: {
              line: {
                stroke: "#d1d5db",
              },
            },
            ticks: {
              line: {
                stroke: "#d1d5db",
                strokeWidth: 1,
              },
              text: {
                fill: "#d1d5db",
              },
            },
            legend: {
              text: {
                fill: "#d1d5db",
              },
            },
          },
          grid: {
            line: {
              stroke: "#4b5563", // dark grid lines
              strokeWidth: 1,
            },
          },
          tooltip: {
            container: {
              background: "#374151", // dark tooltip background
              color: "#f9fafb", // light tooltip text
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
            chip: {
              borderRadius: "9999px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
