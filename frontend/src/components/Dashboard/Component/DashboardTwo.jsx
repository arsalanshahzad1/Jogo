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
    const [activeData, setActiveData] = useState(0);





    const handleRoundSelect = (type) => {
        setFilter(type);
        setShow(false);
    };




    const getUsersData = async () => {
        const response = await apis.getdata();
        setData(response?.data?.data)

    }


    const getStatisticsData = async () => {
        const response = await apis.getStatistics();



        const usdtDayData = response?.data?.data?.UsdtDataByDay.map((item) => {
            if (item > 100000) {
                return Number(item / 10 ** 6).toFixed(4)
            }
            return item
        })

        const usdtWeekData = response?.data?.data?.UsdtDataByWeek.map((item) => {
            if (item > 100000) {

                return Number(item / 10 ** 6).toFixed(4)
            }
            return item
        })

        const ethDayData = response?.data?.data?.EthDataByDay.map((item) => {
            if (item > 100000) {
                return Number(item / 10 ** 18).toFixed(4)
            }
            return item
        })

        const ethWeekData = response?.data?.data?.EthDataByWeek.map((item) => {
            if (item > 100000) {

                return Number(item / 10 ** 18).toFixed(4)
            }
            return item
        })

        setStatisticsData((prevState) => ({ ...prevState, EthByDay: ethDayData, EthByWeek: ethWeekData, UsdtByDay: usdtDayData, UsdtByWeek: usdtWeekData, UserByDay: response?.data?.data?.UserDataByDay, UserByWeek: response?.data?.data?.UserDataBYWeek }))

    }

    const getMonthlyData = async () => {
        const response = await apis.getStatisticsMonthly();

        const data = response?.data?.data?.total_usdt.map((item) => {

            if (item > 100000) {
                return Number(item / 10 ** 6).toFixed(4)
            }
            return item
        })

        const data2 = response?.data?.data?.total_eth.map((item) => {

            if (item > 100000) {
                return Number(item / 10 ** 18).toFixed(4)
            }
            return item
        })

        setStatisticsData((prevState) => ({ ...prevState, EthByMonth: data2, UsdtByMonth: data, UserByMonth: response?.data?.data.total_users }))


    }



    const updatingData = (data) => {
        var tempData = {};
        if (data === 2) {
            tempData = {
                day: statisticsData.UsdtByDay,
                week: statisticsData.UsdtByWeek,
                month: statisticsData.UsdtByMonth,
            }
            return tempData;

        }
        else if (data === 1) {
            tempData = {
                day: statisticsData.EthByDay,
                week: statisticsData.EthByWeek,
                month: statisticsData.EthByMonth,
            }
            return tempData;

        }
        else {

            tempData = {
                day: statisticsData.UserByDay,
                week: statisticsData.UserByWeek,
                month: statisticsData.UserByMonth,
            }
            return tempData;

        }


    }



    useEffect(() => {
        getStatisticsData();
        getUsersData();
        getMonthlyData();
    }, []);




    return (
        <div>
            <div>
                <div className='D-one-holder-inner-1'>
                    <div className={`CardsForData width225 ${activeData == 0 ? 'borderyellow' : ''} `} onClick={() => setActiveData(0)}>
                        <p className='Card-text-one'>
                            Total Users
                        </p>
                        <p className='Card-text-two'>
                            {data?.total_users}
                        </p>
                    </div>
                    <div className={`CardsForData width225 ${activeData == 1 ? 'borderyellow' : ''} `} onClick={() => setActiveData(1)}>
                        <p className='Card-text-one'>
                            Total ETH
                        </p>
                        <p className='Card-text-two'>
                            {Number(data?.total_eth_amount / 10 ** 18).toFixed(6)}
                        </p>
                    </div>
                    <div className={`CardsForData width225 ${activeData == 2 ? 'borderyellow' : ''} `} onClick={() => setActiveData(2)}>
                        <p className='Card-text-one'>
                            Total USDT
                        </p>
                        <p className='Card-text-two'>
                            {Number(data?.total_usdt_amount / 10 ** 6).toFixed(6)}
                        </p>
                    </div>

                </div>
                <div className='divForChart2'>
                    <div className='Chart2-title-row'>
                        <div className='Font-24 px-4'>
                            {activeData == 0 && 'Total Users'}
                            {activeData == 1 && 'Total ETH'}
                            {activeData == 2 && 'Total USDT'}
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
                    <DashboardChart filter={filter} setFilter={setFilter} data={updatingData(activeData)} activeData={activeData} />
                </div>
            </div>
        </div>
    )
}

export default DashboardTwo