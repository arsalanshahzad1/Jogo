import React from 'react'
import './Common.css'

const PieChartCard = ( {style , index , setIndex , content}) => {
  
  return (
    <div className="pie-chart-mgs" style={{ top: style?.top, left: style?.left }}>
  <div className="pie-wrap">
    <img src="/assets/images/pie.png" alt="" />
    <div className="data-wrap">
      
    <h2><span> {content?.heading}</span> <span onClick={() =>{setIndex(0)}}>x</span></h2>
    <p>{content?.desc}</p>
    </div>
    
  </div>
</div>
  )
}

export default PieChartCard