import React from 'react'
import PirChartTwo from '../components/common/PirChartTwo'

const TokenEconomics = (index , setIndex) => {
  return (
    <>
      <section className="home-section-three" id="Token">
        <div className="sec-image">
          <PirChartTwo index={index} setIndex={setIndex}/>

        </div>
      </section>
    </>
  )
}

export default TokenEconomics