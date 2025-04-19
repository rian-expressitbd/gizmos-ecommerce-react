import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { HiDotsVertical } from "react-icons/hi";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export type DoughnutChartData = {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
};

export type ChartOptions = {
  responsive: boolean;
  plugins: {
    legend: {
      position: "top" | "bottom" | "left" | "right";
    };
  };
  layout: {
    padding: number;
  };
};

interface DoughnutChartProps {
  data: DoughnutChartData;
  options?: ChartOptions;
  title?: string;
  onTimeframeChange?: (timeframe: string) => void;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  options,
  title,
  onTimeframeChange,
}) => {
  const defaultOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    layout: {
      padding: 0,
    },
  };

  const handleTimeframeChange = (timeframe: string) => {
    if (onTimeframeChange) {
      onTimeframeChange(timeframe);
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-100 dark:bg-gray-700 dark:border-gray-700">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 px-4 py-3">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title || "User Device"}
        </h5>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-1 bg-gray-50 dark:bg-gray-700 rounded"
          >
            <HiDotsVertical className="w-5 h-5 text-gray-400 dark:text-gray-300" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-md z-[1] w-40 p-2 border border-gray-100 shadow-md shadow-black/5 dark:bg-gray-700 dark:border-gray-600"
          >
            <li className="py-1 leading-5">
              <a
                className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleTimeframeChange("Today")}
              >
                Today
              </a>
            </li>
            <li className="py-1 leading-5">
              <a
                className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleTimeframeChange("This Week")}
              >
                This Week
              </a>
            </li>
            <li className="py-1 leading-5">
              <a
                className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => handleTimeframeChange("Last Week")}
              >
                Last Week
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6 pb-3 flex justify-center">
        <div className="w-full max-w-[300px] h-auto aspect-square">
          <Doughnut data={data} options={options || defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
