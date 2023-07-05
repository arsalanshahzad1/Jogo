import React, { useEffect } from 'react'
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DashboardChart from './DashboardChart';
import apis from '../../../Services';


function DashboardTwo({ account, setAccount }) {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('Monthly');

    const [data, setData] = useState('');
    const [statisticsData, setStatisticsData] = useState('');
    const [statisticsDataMonthly, setStatisticsDataMonthly] = useState('');

    const handleRoundSelect = (type) => {
        setFilter(type);
        setShow(false);
    };
    

    const getUsersData = async()=>{
        const response = await apis.getdata();
        setData(response?.data?.data)
        // console.log("response2", response);
    }


    const getStatisticsData = async()=>{
        const response = await apis.getStatistics();
        setStatisticsData(response?.data?.data)       
   
        const data = response?.data?.data?.EthDataByDay.map((item)=>{
            if(item > 100000)
            {
                return Number(item/10**18).toFixed(4)
            }
            return item
           })
           
        const ethWeekData = response?.data?.data?.EthDataByWeek.map((item)=>{
            if(item > 100000)
            {
                // console.log("CAAAAAAAAAAAAAAAAAAAAA")
                return Number(item/10**18).toFixed(4)
            }
            return item
           })
        setStatisticsData( (prevState)=>({...prevState,EthDataByDay:data,EthDataByWeek:ethWeekData}))       
    }

    const getMonthlyData = async()=>{
        const response = await apis.getStatisticsMonthly();
       const data = response?.data?.data?.total_eth.map((item)=>{
        if(item > 100000)
        {
            return Number(item/10**18).toFixed(4)
        }
        return item
    })
        setStatisticsDataMonthly({total_eth:data ,total_users:response?.data?.data.total_users})      
    }
// console.log(data,"data")

// console.log(statisticsData,"statisticsData")

// console.log(statisticsDataMonthly,"statisticsDataMonthly")
    

   useEffect(() => {
      getUsersData();
       getStatisticsData();
       getMonthlyData();
    }, []);



    return (
        <div>
     
            <div>
                    <div className='D-one-holder-inner-1'>
                        <div className='CardsForData borderyellow width225'>
                            <p className='Card-text-one'>
                                Total Users
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_users}
                            </p>
                        </div>
                        <div className='CardsForData width225'>
                            <p className='Card-text-one'>
                                Total ETH
                            </p>
                            <p className='Card-text-two'>
                                {Number(data?.total_eth_amount/10**18).toFixed(6)}
                            </p>
                        </div>
                        <div className='CardsForData width225'>
                            <p className='Card-text-one'>
                                Total USDT
                            </p>
                            <p className='Card-text-two'>
                                {Number(data?.total_usdt_amount/10**6).toFixed(6)}
                            </p>
                        </div>

                    </div>
                    <div className='divForChart2'>
                        <div className='Chart2-title-row'>
                            <div className='Font-24 px-4'>
                                Total Earnings
                            </div>
                            <div>
                                <div className='DropHolder px-4'>
                                    <div className='ButtonDropDown' onClick={() => setShow(!show)}>
                                        {filter}
                                        <ArrowDropDownIcon />
                                    </div>
                                    <div className={`dropdowndiv ${show ? '' : 'hideDropdown'}`}>
                                        
                                        <p onClick={() => handleRoundSelect('Monthly')}>Monthly</p>
                                        <p onClick={() => handleRoundSelect('Weekly')}>Weekly</p>
                                        <p onClick={() => handleRoundSelect('Daily')}>Daily</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <DashboardChart filter={filter} setFilter={setFilter} data={statisticsData} dataMonthly={statisticsDataMonthly} />
                    </div>
                </div>
        </div>
    )
}

export default DashboardTwo