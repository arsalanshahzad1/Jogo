import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DashboardChart = ({ filter ,dataMonthly,data}) => {
  const getXAxisCategories = () => {
    switch (filter) {
      case 'Daily':
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const xAxisCategories = [];
        for (let i = 1; i <= daysInMonth; i++) {
          const date = new Date(currentYear, currentMonth, i);
          const dayOfMonth = date.getDate();
          xAxisCategories.push(`${dayOfMonth}`);
        }
        return xAxisCategories;
      case 'Weekly':
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      case 'Monthly':
      default:
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  };
  const getFilteredData = (seriesName) => {
    switch (filter) {
      case 'Daily':
        switch (seriesName) {
          case 'Total Users':
            return data?.UserDataByDay;
          case 'Total Earning':
            return   data?.EthDataByDay;
          default:
            return [];
        }
      case 'Weekly':
        switch (seriesName) {
          case 'Total Users':
            return data?.UserDataBYWeek;
          case 'Total Earning':
            return  data?.EthDataByWeek;
           default:
            return [];
        }
      case 'Monthly':
      default:
        switch (seriesName) {
          case 'Total Users':
            return dataMonthly?.total_users;
          case 'Total Earning':
            return dataMonthly?.total_usdt;
          default:
            return [];
        }
    }
  };

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: getXAxisCategories(),
    },
    yaxis: {
      title: {
        text: 'Range',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return  val;
        },
      },
    },
    colors: ['white', '#FFC107'],
  };

  const chartSeries = [
    {
      name: 'Total Users',
      data: getFilteredData('Total Users'),
    },
    {
      name: 'Total Earning',
      data: getFilteredData('Total Earning'),
    },
  ];

  return (
    <div id="chart" className="dashboard-chart">
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default DashboardChart;
