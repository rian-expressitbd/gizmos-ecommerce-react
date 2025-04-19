import React from "react";
import Chart from "react-apexcharts";

interface PieChartProps {
  series: ApexNonAxisChartSeries;
  options: ApexCharts.ApexOptions;
}

const PieChart: React.FC<PieChartProps> = ({ series, options }) => {
  return <Chart type="pie" series={series} options={options} height={350} />;
};

export default PieChart;
