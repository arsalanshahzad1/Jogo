import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const PieChart = () => {
    // const data = [
    //     {
    //         heading : 'one',
    //         desc : 'The Q2 launch of the AI Meme Coin project with pre-selling of AIM tokens through a 5-stage process is the first major milestone in the development of the AIM ecosystem.'

    //     },
    //     {
    //         heading : 'two',
    //         desc : 'The Q2 launch of the AI Meme Coin project with pre-selling of AIM tokens through a 5-stage process is the first major milestone in the development of the AIM ecosystem.'

    //     },
    //     {
    //         heading : 'three',
    //         desc : 'The Q2 launch of the AI Meme Coin project with pre-selling of AIM tokens through a 5-stage process is the first major milestone in the development of the AIM ecosystem.'

    //     },
    //     {
    //         heading : 'four',
    //         desc : 'The Q2 launch of the AI Meme Coin project with pre-selling of AIM tokens through a 5-stage process is the first major milestone in the development of the AIM ecosystem.'

    //     },
    // ]
    const [chartData, setChartData] = useState({
        series: [44, 55, 13, 33],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Mangoes'],
            colors: ['#BFBFBF', '#000', '#000', '#000'],
            tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    return '<div class="custom-tooltip">Value: ' + data[seriesIndex].heading + '</div>';
                },
            },
        },
    });

    return (

        <div style={{ position: 'relative', zIndex: '1'  , width :'420px' , padding : '60px'}} >
            <div className="pie-chart-wrap">
            <svg width="311" height="291" viewBox="0 0 311 291" fill="none" xmlns="http://www.w3.org/2000/svg" className='hard-pie'>
                <path d="M145.502 145.502L81.8237 14.8085C102.375 4.77339 122.635 0.0910645 145.502 0.0910645V145.502Z" fill="#BFBFBF" />
                <path d="M145.502 145.502L3.41797 115.258C12.9439 70.4061 40.6516 34.9006 81.8237 14.7976L145.502 145.502Z" fill="#5F5F5F" />
                <path d="M145.502 145.502L84.1132 277.281C21.8036 248.192 -10.8909 182.581 3.41792 115.262L145.502 145.502Z" fill="#9F9F9F" />
                <path d="M145.502 145.502V290.909C122.635 290.909 104.832 286.959 84.1133 277.288L145.502 145.502Z" fill="#404040" />
                <path d="M145.502 145.502L287.582 175.746C280.708 208.353 262.833 237.6 236.96 258.571C211.087 279.542 178.793 290.961 145.502 290.909V145.502Z" fill="#808080" />
                <path d="M145.502 145.502L206.887 13.7153C269.196 42.8004 301.891 108.415 287.582 175.735L145.502 145.502Z" fill="#D3D3D3" />

                <path d="M145.502 145.502V0.0910645C168.365 0.0910645 186.168 4.04463 206.887 13.7154L145.502 145.502Z" fill="#575757" />
                <defs>
                    <filter id="filter0_d_158_154" x="125.502" y="8.71533" width="185.411" height="202.019" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_158_154" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_158_154" result="shape" />
                    </filter>
                </defs>
            </svg>
            <div className='one'> -------------- 1</div>
            <div className='two'>2 --------------- </div>
            <div className='three'>3 ---------------</div>
            <div className='four'>4 ---------------</div>
            <div className='five'>5 ---------------</div>
            <div className='six'>--------------- 6</div>                                
            <div className='seven'> --------------- 7</div>
            </div>

            <div class="message-box">
                <div>
                    <svg width="313" height="244" viewBox="0 0 293 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_58_3723)">
                            <path d="M44.3905 203.915L252.241 186.826C255.54 186.556 258.74 185.566 261.613 183.925C264.487 
                            182.285 266.963 180.033 268.867 177.331C270.771 174.629 272.056 171.542 272.631 168.29C273.206 
                            165.037 273.058 161.698 272.195 158.509L248.798 72.3788C247.503 67.608 244.669 63.3957 240.734 
                            60.3932C236.799 57.3907 231.982 55.7652 227.028 55.768L207.742 55.768L176.723 20.0344L180.782 
                            55.768L68.644 55.768C63.6212 55.7681 58.742 57.4408 54.7799 60.521C50.8178 63.6011 47.9994 
                            67.9125 46.7714 72.7718L20.6852 176.025C19.8208 179.492 19.7953 183.114 20.6108 186.592C21.4262 
                            190.071 23.0592 193.306 25.375 196.031C27.6907 198.755 30.6228 200.891 33.9292 202.262C37.2356 
                            203.633 40.8214 204.199 44.3905 203.915Z" fill="url(#paint0_linear_58_3723)"></path>
                            </g><defs><filter id="filter0_d_58_3723" x="0.0175781" y="0.0344238" 
                            width="292.957" height="223.952" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="10"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.756863 0 0 0 0 0.027451 0 0 0 0.9 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_58_3723"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_58_3723" result="shape"></feBlend></filter><linearGradient id="paint0_linear_58_3723" x1="257.353" y1="192.615" x2="119.287" y2="2.77215" gradientUnits="userSpaceOnUse"><stop stop-color="#222222"></stop><stop offset="1" stop-color="#444444"></stop></linearGradient></defs></svg><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p></div></div>

        </div>



    );


}

export default PieChart