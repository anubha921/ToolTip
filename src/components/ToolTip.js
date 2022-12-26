import React, { useState } from 'react'
import './ToolTip.css'

function ToolTip(props) {

    const [topTool,setTopTool] = useState("")
    const [rightTool,setRightTool] = useState("")
    const [bottomTool,setBottomTool] = useState("")
    const [leftTool,setLeftTool] = useState("")
    function handleMouseLeave(){
      setTopTool("")
      setRightTool("")
      setBottomTool("")
      setLeftTool("")
    }
  return (
    <>
    <h1>TOOL TIP</h1>
    <div className='d-flex justify-content-evenly align-items-center' style={{height:'444px',position:"relative"}}>
      <button onMouseOver={()=>{setTopTool("Top element")}} onMouseOut={handleMouseLeave} className='btn btn-lg btn-primary'>Top</button>
      <div className='top' style={{position:"absolute",top:"158px",left:"231px"}}>{topTool}</div>
      <button onMouseOver={()=>{setRightTool("Right element")}} onMouseOut={handleMouseLeave} className='btn btn-lg btn-primary'>Right</button>
      <div className='right' style={{position:"absolute",top:"205px",left:"638px"}}>{rightTool}</div>
      <button onMouseOver={()=>{setBottomTool("Bottom element")}} onMouseOut={handleMouseLeave} className='btn btn-lg btn-primary'>Bottom</button>
      <div className='bottom' style={{position:"absolute",top:"257px",right:"541px"}}>{bottomTool}</div>
      <button onMouseOver={()=>{setLeftTool("Left element")}} onMouseOut={handleMouseLeave} className='btn btn-lg btn-primary'>Left</button>
      <div className='left' style={{position:"absolute",top:"205px",right:"318px"}}>{leftTool}</div>
    </div>
    </>
  )
}

export default ToolTip
