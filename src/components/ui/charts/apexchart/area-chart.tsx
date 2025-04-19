import React from "react";
import Chart from "react-apexcharts";

interface AreaChartProps {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
}

const AreaChart: React.FC<AreaChartProps> = ({ series, options }) => {
  return <Chart type="area" series={series} options={options} height={350} />;
};

export default AreaChart;
