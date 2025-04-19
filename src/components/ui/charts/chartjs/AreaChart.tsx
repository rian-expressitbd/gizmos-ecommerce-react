import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export type AreaChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
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

interface AreaChartProps {
  data: AreaChartData;
  options?: ChartOptions;
  title?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, options, title }) => {
  const defaultOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="w-full max-w-full p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
      {title && (
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
        </div>
      )}
      <div className="w-full h-auto">
        <Line data={data} options={options || defaultOptions} />
      </div>
    </div>
  );
};

export default AreaChart;
