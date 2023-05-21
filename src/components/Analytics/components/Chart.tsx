import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, ChartOptions, registerables } from "chart.js";
import theme from "../../../theme";

Chart.register(ChartDataLabels, ...registerables);

function ChartBar() {
  const dataBar = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        backgroundColor: theme.palette.secondary.dark,
        borderColor: theme.palette.secondary.dark,
        borderWidth: 1,
        borderRadius: 10,
        hoverBackgroundColor: theme.palette.secondary.dark,
        hoverBorderColor: theme.palette.secondary.dark,
        data: [1_234, 2_234, 5_234, 2_234, 1_000, 2_900, 3_900],
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => {
          return `$ ${value}`;
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        display: false,
      },
    },
  };
  return <Bar data={dataBar} options={options as any} width={100} height={65} />;
}

export default ChartBar;
