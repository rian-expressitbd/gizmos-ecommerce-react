// src/pages/dashboard/DashboardPage.tsx
import PageTitle from "@/components/page-title";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { AnalyticsCard } from "@/components/ui/cards/analytics-card";
import { StatCard } from "@/components/ui/cards/stat-card";
import { WidgetCard } from "@/components/ui/cards/widget-card";
import AreaChart, { AreaChartData } from "@/components/ui/charts/chartjs/AreaChart";
import BarChart, { BarChartData } from "@/components/ui/charts/chartjs/BarChart";
import DoughnutChart, { DoughnutChartData } from "@/components/ui/charts/chartjs/DoughnutChart";
import LineChart, { LineChartData } from "@/components/ui/charts/chartjs/LineChart";
import PieChart, { PieChartData } from "@/components/ui/charts/chartjs/PieChart";
import RadarChart, { RadarChartData } from "@/components/ui/charts/chartjs/RadarChart";
import Walkthrough from "@/components/walkthrough/Walkthrough";
import WalkthroughTrigger from "@/components/walkthrough/WalkthroughTrigger";
import { WalkthroughStep } from "@/types/walkthrough";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChartLine, FaCheck, FaClock, FaTruck, FaUndo, FaUsers } from "react-icons/fa";
import { PiShoppingCartLight, PiTagLight } from "react-icons/pi";

// AreaChart Data
const AreaChartSalesData: AreaChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Revenue 2024",
      data: [12000, 15000, 14000, 16000, 17000],
      borderColor: "rgb(48, 142, 135)", // Tailwind teal-700
      backgroundColor: "rgba(131, 187, 183, 0.5)", // Tailwind teal-300 with 50% opacity
      fill: true,
    },
    {
      label: "Revenue 2023",
      data: [10000, 13000, 12000, 14000, 15000],
      borderColor: "rgb(243, 145, 89)", // Tailwind orange-400
      backgroundColor: "rgba(250, 211, 189, 0.5)", // Tailwind orange-100 with 50% opacity
      fill: true,
    },
  ],
};

// BarChart Data
const BarChartSalesData: BarChartData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Sales 2024",
      data: [50000, 70000, 60000, 80000],
      backgroundColor: "rgba(131, 187, 183, 0.8)", // Tailwind teal-300 with 80% opacity
      borderColor: "rgb(48, 142, 135)", // Tailwind teal-700
      borderWidth: 2,
    },
    {
      label: "Sales 2023",
      data: [45000, 65000, 55000, 75000],
      backgroundColor: "rgba(250, 211, 189, 0.8)", // Tailwind orange-100 with 80% opacity
      borderColor: "rgb(243, 145, 89)", // Tailwind orange-400
      borderWidth: 2,
    },
  ],
};

// DoughnutChart Data
const DoughnutUserDeviceData: DoughnutChartData = {
  labels: ["Desktop", "Mobile", "Tablet"],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ["#4f46e5", "#f43f5e", "#22c55e"], // Tailwind indigo-600, rose-500, green-500
      hoverBackgroundColor: ["#4f46e5", "#f43f5e", "#22c55e"],
    },
  ],
};

// LineChart Data
const LineChartSalesData: LineChartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  datasets: [
    {
      label: "Weekly Sales 2024",
      data: [20000, 25000, 22000, 28000, 27000],
      borderColor: "rgb(48, 142, 135)",
      backgroundColor: "rgba(131, 187, 183, 0.5)",
    },
    {
      label: "Weekly Sales 2023",
      data: [18000, 23000, 20000, 26000, 25000],
      borderColor: "rgb(243, 145, 89)", // Tailwind orange-400
      backgroundColor: "rgba(250, 211, 189, 0.5)", // Tailwind orange-100 with 50% opacity
    },
  ],
};

// PieChart Data
const PieUserDeviceData: PieChartData = {
  labels: ["Chrome", "Firefox", "Safari"],
  datasets: [
    {
      data: [70, 20, 10],
      backgroundColor: ["#4f46e5", "#f43f5e", "#22c55e"], // Tailwind indigo-600, rose-500, green-500
      hoverBackgroundColor: ["#4f46e5", "#f43f5e", "#22c55e"],
    },
  ],
};

// RadarChart Data
const budgetData: RadarChartData = {
  series: [
    { name: "Budget Report", data: [5000, 7000, 6000, 8000, 9000, 7500] },
    { name: "Allocated Budget", data: [6000, 8000, 7000, 9000, 10000, 8500] },
    { name: "Actual Spending", data: [4500, 6500, 5500, 7500, 8500, 7000] },
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
      categories: ["Marketing", "Operations", "IT", "HR", "Sales", "R&D"],
    },
    yaxis: {
      show: false,
    },
    legend: { position: "top", horizontalAlign: "center" },
    colors: ["#4f46e5", "#f43f5e", "#22c55e"], // Tailwind indigo-600, rose-500, green-500
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
};

interface DashboardCount {
  order_count: {
    status: string;
    total_order: number;
  }[];
}

const DashboardPage = () => {
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sample dashboard count data
  const [dashboardCount] = useState<DashboardCount>({
    order_count: [
      { status: "in_review", total_order: 10 },
      { status: "cancelled", total_order: 5 },
      { status: "pending", total_order: 7 },
      { status: "delivered", total_order: 12 },
    ],
  });

  // Walkthrough steps configuration
  const dashboardSteps: WalkthroughStep[] = [
    {
      title: "Welcome to Your Dashboard",
      content: "This is your main control center where you can monitor all key metrics and activities.",
      element: "#dashboard-header",
      elementPadding: 12,
    },
    {
      title: "Quick Stats Overview",
      content: "These cards show your key metrics at a glance. Track sales, orders, and user activity here.",
      element: ".stats-cards",
    },
    {
      title: "Sales Analytics",
      content: "Visualize your sales performance with interactive charts showing trends over different time periods.",
      element: ".sales-charts",
    },
    {
      title: "Order Status",
      content: "Monitor different order statuses to keep track of your business operations.",
      element: ".order-status-cards",
    },
    {
      title: "Detailed Charts",
      content: "Dive deeper into your data with various chart types showing different aspects of your business.",
      element: ".detailed-charts",
    },
  ];

  useEffect(() => {
    // Check if walkthrough was already completed
    const completed = localStorage.getItem("dashboardWalkthroughCompleted");
    if (!completed) {
      setTimeout(() => {
        setShowWalkthrough(true);
      }, 1500);
    }

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleWalkthroughComplete = (completed: boolean) => {
    if (completed) {
      localStorage.setItem("dashboardWalkthroughCompleted", "true");
    }
    setShowWalkthrough(false);
  };

  const handleTimeframeChange = (timeframe: string) => {
    console.log("Selected timeframe:", timeframe);
    // You would typically fetch new data based on the timeframe here
  };

  return (
    <AnimatePresence>
      {showWalkthrough && (
        <>
          <WalkthroughTrigger
            walkthroughId='dashboard-tour'
            condition={true}
            config={{
              overlayOpacity: 0.7,
              highlightColor: "rgba(0, 0, 0, 0.7)",
            }}
          />
          <Walkthrough
            id='dashboard-tour'
            steps={dashboardSteps}
            onStart={() => console.log("Dashboard tour started")}
            onEnd={handleWalkthroughComplete}
            onStepChange={(step) => console.log(`Now showing step ${step + 1}`)}
          />
        </>
      )}

      <div className='flex flex-col gap-4'>
        <div className='w-full flex md:flex-row flex-col-reverse gap-2 py-4 justify-between items-center'>
          <div className='flex gap-2 items-center place-self-start self-start'>
            <PageTitle title='Dashboard' />
          </div>
          <Breadcrumb className='place-self-end self-end md:place-self-center' />
        </div>

        <motion.div
          className='flex flex-col gap-2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stats Cards */}
          <div className='stats-cards grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <StatCard
              icon={PiShoppingCartLight}
              value='10,000'
              label='Total Sales'
              trend={{ value: 12, isPositive: true }}
              progressPercentage={75}
            />
            <StatCard
              icon={PiTagLight}
              value='2,435'
              label='New Orders'
              trend={{ value: 8, isPositive: false }}
              progressPercentage={50}
            />
            <WidgetCard icon={FaChartLine} value='1,234' label='Total Sales' trend={{ value: 12, isPositive: true }} />
            <AnalyticsCard icon={FaUsers} value='567' label='Active Users' trend={{ value: 8, isPositive: false }} />
          </div>

          {/* Order Status Cards */}
          <div className='order-status-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {[
              {
                label: "Confirmed Orders",
                value: dashboardCount?.order_count?.find((order) => order.status === "delivered")?.total_order || 0,
                icon: <FaCheck size={13} />,
                bgColor: "bg-green-200 dark:bg-green-800",
                textColor: "text-green-700 dark:text-green-200",
              },
              {
                label: "Pending Orders",
                value: dashboardCount?.order_count?.find((order) => order.status === "pending")?.total_order || 0,
                icon: <FaClock size={15} />,
                bgColor: "bg-yellow-100 dark:bg-yellow-800",
                textColor: "text-yellow-700 dark:text-yellow-200",
              },
              {
                label: "In Review",
                value: dashboardCount?.order_count?.find((order) => order.status === "in_review")?.total_order || 0,
                icon: <FaTruck size={15} />,
                bgColor: "bg-purple-200 dark:bg-purple-800",
                textColor: "text-purple-700 dark:text-purple-200",
              },
              {
                label: "Returned Orders",
                value: dashboardCount?.order_count?.find((order) => order.status === "cancelled")?.total_order || 0,
                icon: <FaUndo size={15} />,
                bgColor: "bg-red-200 dark:bg-red-800",
                textColor: "text-red-700 dark:text-red-200",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow ${stat.bgColor} ${stat.textColor} flex items-center justify-between`}
              >
                <div>
                  <p className='text-sm font-medium'>{stat.label}</p>
                  <p className='text-2xl font-bold'>{stat.value}</p>
                </div>
                <div className='p-3 rounded-full bg-white dark:bg-gray-700'>{stat.icon}</div>
              </div>
            ))}
          </div>

          {/* Sales Charts */}
          <div className='sales-charts grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div>
              <LineChart data={LineChartSalesData} title='Weekly Sales Data' />
            </div>
            <div>
              <BarChart data={BarChartSalesData} title='Quarterly Sales Data' />
            </div>
          </div>

          {/* Detailed Charts */}
          <div className='detailed-charts grid grid-cols-1 lg:grid-cols-3 gap-2'>
            <div>
              <PieChart
                data={PieUserDeviceData}
                title='Browser Usage Distribution'
                onTimeframeChange={handleTimeframeChange}
              />
            </div>
            <div>
              <AreaChart data={AreaChartSalesData} title='Monthly Revenue Data' />
            </div>
            <div>
              <DoughnutChart
                data={DoughnutUserDeviceData}
                title='Device Usage Distribution'
                onTimeframeChange={handleTimeframeChange}
              />
            </div>
          </div>

          {/* Radar Chart - Full width */}
          <div className='mt-4'>
            <RadarChart data={budgetData} title='Budget Performance' autoRefresh={false} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DashboardPage;
