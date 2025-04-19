import React from "react";
import Chart from "react-apexcharts";

interface BarChartProps {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
}

const BarChart: React.FC<BarChartProps> = ({ series, options }) => {
  return <Chart type="bar" series={series} options={options} height={350} />;
};

export default BarChart;
