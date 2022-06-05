import React from 'react'
import '../css/heart.css'
import heartframe from '../images/heartframe.png'
import eshahrithik from '../images/eshahrithik.jpg'
import $ from 'jquery'
function Heart({img}) {
    let size=100
  return (
    <div className='heart' style={{backgroundImage:'url('+img+")",height:size,width:size}} 
    onClick={()=>{
      
    }}
    >
        <img src={heartframe} className='image' style={{height:size,width:size}} />
    </div>
  )
}

export default Heart