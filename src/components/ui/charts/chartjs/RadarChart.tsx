import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

// Define types for the chart data
export interface RadarChartData {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      type: "radar";
      height: number;
    };
    stroke: {
      width: number;
    };
    fill: {
      opacity: number;
    };
    markers: {
      size: number;
    };
    xaxis: {
      categories: string[];
    };
    yaxis: {
      show: boolean;
    };
    legend: {
      position: "top" | "bottom" | "left" | "right";
      horizontalAlign: "left" | "right" | "center";
    };
    colors: string[];
    responsive: {
      breakpoint: number;
      options: {
        chart: {
          height: number;
        };
        legend: {
          position: "top" | "bottom" | "left" | "right";
        };
      };
    }[];
  };
}

interface RadarChartProps {
  data?: RadarChartData;
  title?: string;
  autoRefresh?: boolean;
}

const RadarChart: React.FC<RadarChartProps> = ({
  data: initialData,
  title = "Budget Performance",
  autoRefresh = false,
}) => {
  const [radarChartData, setRadarChartData] = useState<RadarChartData>({
    series: [
      { name: "Budget Report", data: [] },
      { name: "Allocated Budget", data: [] },
      { name: "Actual Spending", data: [] },
    ],
    options: {
      chart: {
        type: "radar",
        height: 350,
      },
      stroke: { width: 2 },
      fill: { opacity: 0.3 },
      markers: { size: 4 },
      xaxis: {
        categories: [],
      },
      yaxis: {
        show: false,
      },
      legend: { position: "top", horizontalAlign: "center" },
      colors: ["#4f46e5", "#f43f5e", "#22c55e"],
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: { height: 300 },
            legend: { position: "bottom" },
          },
        },
      ],
    },
  });

  useEffect(() => {
    if (initialData) {
      setRadarChartData(initialData);
      return;
    }

    const fetchData = () => {
      const categories = [
        "Marketing",
        "Operations",
        "IT",
        "HR",
        "Sales",
        "R&D",
      ];
      const budgetReport = categories.map(
        () => Math.floor(Math.random() * 10000) + 2000
      );
      const allocatedBudget = categories.map(
        () => Math.floor(Math.random() * 12000) + 3000
      );
      const actualSpending = categories.map(
        () => Math.floor(Math.random() * 9000) + 1500
      );

      setRadarChartData((prev) => ({
        ...prev,
        series: [
          { name: "Budget Report", data: budgetReport },
          { name: "Allocated Budget", data: allocatedBudget },
          { name: "Actual Spending", data: actualSpending },
        ],
        options: { ...prev.options, xaxis: { categories } },
      }));
    };

    fetchData();

    if (autoRefresh) {
      const interval = setInterval(fetchData, 5000);
      return () => clearInterval(interval);
    }
  }, [initialData, autoRefresh]);

  return (
    <div className="bg-white p-4 shadow rounded-md w-full dark:bg-gray-700 dark:text-gray-100">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <Chart
        options={radarChartData.options}
        series={radarChartData.series}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default RadarChart;
