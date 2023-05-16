import React from 'react'
import PieChart from '../components/common/PieChart'

const FundAllocation = (index, setIndex) => {
  return (

    <section className="home-section-five" id="fund">
      <div className="sec-image">
      <h2>Fund Allocation</h2>
        <PieChart index={index} setIndex={setIndex} />
      </div>
    </section>


  )
}

export default FundAllocation