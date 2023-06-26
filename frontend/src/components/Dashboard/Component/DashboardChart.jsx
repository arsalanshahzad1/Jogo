// import Chart from 'react-apexcharts'

// export default function DashboardChart({data}) {

//   console.log("!!!!!!!!!!!!@@@@@@@",data)

//         const series = [{
//           name: 'Inflation',
//          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
//         //  data : data
//         }];
//         const options = {
//           fill: {
//             type: 'solid',
//             colors: ['#F1C9C9'],
//           },
//           chart: {
//             height: 350,
//             type: 'bar',
//           },
//           plotOptions: {
//             bar: {
//               borderRadius: 10,
//               dataLabels: {
//                 position: 'top', // top, center, bottom
//               },
//             }
//           },
//           dataLabels: {
//             enabled: true,
//             formatter: function (val) {
//               return val + "%";
//             },
//             offsetY: -20,
//             style: {
//               fontSize: '12px',
//               colors: ["#ff4040"]
//             }
//           },
          
//           xaxis: {
//             categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//             position: 'top',
//             axisBorder: {
//               show: false
//             },
//             axisTicks: {
//               show: false
//             },
//             crosshairs: {
//               fill: {
//                 type: 'gradient',
//                 gradient: {
//                   colorFrom: '#D8E3F0',
//                   colorTo: '#BED1E6',
//                   stops: [0, 100],
//                   opacityFrom: 0.4,
//                   opacityTo: 0.5,
//                 }
//               }
//             },
//             tooltip: {
//               enabled: true,
//             }
//           },
//           yaxis: {
//             axisBorder: {
//               show: false
//             },
//             axisTicks: {
//               show: false,
//             },
//             labels: {
//               show: false,
//               formatter: function (val) {
//                 return val + "%";
//               }
//             }
          
//           },
//           title: {
//             text: 'OverView',
//             floating: true,
//             offsetY: 330,
//             align: 'center',
//             style: {
//               color: '#444'
//             }
//           }
//         };

  

//       return <>
//       <div id="chart">
//         <Chart options={options} series={series} type="bar" height={350} width={800} />
//     </div>
//       </>     
// }



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
            return dataMonthly?.total_eth;
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
    style: {
      background: '#000000', // Set the background color to black
      color: '#ffffff', // Set the text color to white
    },
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
    // {
    //   name: 'Free Cash Flow',
    //   data: getFilteredData('Free Cash Flow'),
    // },
  ];

  return (
    <div id="chart" className="dashboard-chart">
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default DashboardChart;
