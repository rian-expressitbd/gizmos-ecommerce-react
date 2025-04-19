import React from "react";
import Chart from "react-apexcharts";

interface LineChartProps {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
}

const LineChart: React.FC<LineChartProps> = ({ series, options }) => {
  return <Chart type="line" series={series} options={options} height={350} />;
};

export default LineChart;
