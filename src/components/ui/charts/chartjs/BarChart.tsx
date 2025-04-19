import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type BarChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
};

export type ChartOptions = {
  responsive: boolean;
  plugins: {
    legend: {
      position: "top" | "bottom" | "left" | "right";
    };
    title?: {
      display: boolean;
      text: string;
    };
  };
};

interface BarChartProps {
  data: BarChartData;
  options?: ChartOptions;
  title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, options, title }) => {
  const defaultOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="w-full max-w-full p-4 bg-white rounded-lg shadow-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      {title && (
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
        </div>
      )}
      <div className="w-full h-auto">
        <Bar data={data} options={options || defaultOptions} />
      </div>
    </div>
  );
};

export default BarChart;
