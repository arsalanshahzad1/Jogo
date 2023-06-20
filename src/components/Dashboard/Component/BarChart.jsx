import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../Assets/style/style.css';
import { ethers } from 'ethers';

const BarChart = ({data}) => {

    let result =  data.noOfUsersInRound.toString() > 0 ? true : false;
    console.log("datadata",result)

    
    
    
    const series = [
        {
            data: [Number(data.ethRaisedInCurrentRound),Number(data.tokensSoldInCurrentRound/10**18),Number(data.usdtRaisedInCurrentRound/10**6)],
        },
    ];

    const Dummy = [
        {
            data: [1000000000000000,1000000000000000,1000000000000000,1000000000000000],
        },
    ];
    
    

    const options = {
        chart: {
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                },
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#585858', '#FF6347'],
        plotOptions: {
            bar: {
                columnWidth: '90%', // Adjust the value to increase/decrease spacing
                distributed: true,
                endingShape: 'rounded',
                borderRadius: 5,
                barWidth: '80%', // Adjust the value as needed
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                style: {
                    colors: 'white',
                    fontSize: '14px',
                    fontFamily: 'heading', // Apply 'heading' font
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value / 1000 + 'k';
                },
                style: {
                    colors: 'white',
                    fontSize: '14px',
                    fontFamily: 'heading', // Apply 'heading' font
                },
            },
        },
    };

    return (
        <div className="chart-container">
            {result ?

            <ReactApexChart options={options} series={series} type="bar" />
            :
            <ReactApexChart options={options} series={Dummy} type="bar" />
            }
        </div>
    );
};

export default BarChart;
