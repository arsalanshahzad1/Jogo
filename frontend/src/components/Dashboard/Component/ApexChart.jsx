import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({data}) => {

  let result =  data?.total_users > 0 ? true : false;

  let target = 100000000;
  let sold = Number(data?.total_token_sale)/10**18;
  let total =  target - sold;
  
  // const series = [Number(data?.total_token_sale)/10**18,Number(roundLimit)];
  
  const series = [sold,total];
  const Dummy = [0,1];
  
  const options = {
    chart: {
      width: '100%',
      type: 'pie',
      toolbar: {
        show: false,
      },
    },
    labels: [],
    colors: ['#FFC107', '#DFDFDF', '#404040', '#9F9F9F'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 300,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 420,
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
     {result ?
    
    <ReactApexChart options={options} series={series} type="pie" width={380} />
    :
    <ReactApexChart options={options} series={Dummy} type="pie" width={380} />

     }
    </div>
  );
};

export default ApexChart;
