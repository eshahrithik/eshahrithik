import React from 'react'
import ReactConfetti from 'react-confetti'
import ReactPlayer from 'react-player'
import '../css/view.css'
import video from '../music/video.mp4'
function jj(j){
    let r=(Math.sin(Math.sqrt(Math.abs(Math.cos(j)))))/(Math.sin(j)+7/5)-2*Math.sin(j)+2
    let x=r*Math.cos(j),y=r*Math.sin(j)
    return {x,y}
}
function View({img,setimage}) {
  return (
    <div className='view' onClick={()=>{
        setimage(null)
    }} >
        <ReactConfetti
  drawShape={ctx => {
    ctx.beginPath()
    for(let i = 0; i < 22; i++) {
      const angle = 0.3 * i
      let {x,y}=jj(angle)
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.closePath()
  }}
/>
        <img src={img} className='viewimage' />
    </div>
  )
}

export default View