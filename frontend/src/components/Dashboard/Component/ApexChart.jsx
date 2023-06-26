import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({data}) => {

  let result =  data?.total_users > 0 ? true : false;
  
  let roundLimit = 100_000_000
  // let roundRuning;

  // if(data.tokensSoldInCurrentRound.toString()>1000000*10**18){
  //   roundRuning =  Number(data.tokensSoldInCurrentRound.toString())/10**18;
  // }else{
  //   roundRuning = Number(data.tokensSoldInCurrentRound.toString())/10**14;
  // }
  
  // console.log("11111111111111",data.tokensSoldInCurrentRound.toString()/10**12)
  
  
  const series = [Number(data?.total_token_sale)/10**18,Number(roundLimit)];
  
  // const series = [Number(data.tokensSoldInCurrentRound.toString()),Number(roundLimit)];
    
  const Dummy = [1000000000000,10,10,10,10,10,10,10,10,10,10,10,10];
  
  
  
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
