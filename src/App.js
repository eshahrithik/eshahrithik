import './App.css';
import Heart from './custom/heart';
import background from './images/background.jpg'
import im1 from './images/1.jpg'
import im2 from './images/2.jpg'
import im3 from './images/3.jpg'
import im4 from './images/4.jpg'
import im5 from './images/5.jpg'
import im6 from './images/6.jpg'
import im7 from './images/7.jpg'
import im8 from './images/8.jpg'
import im9 from './images/9.jpg'
import im10 from './images/10.jpg'
import im11 from './images/11.jpg'
import im12 from './images/12.jpg'
import im13 from './images/13.jpg'
import im14 from './images/14.jpg'
import song from './music/song.mpeg'
import card from './images/card.png'
import cake from './images/cake.png'
import useSound from 'use-sound'
import music from './music/music.mp3'
import {useEffect, useState} from 'react'
import rose from './images/rose.png'
import cover from './images/cover.jpg'
import covertop from './images/covertop.png'
import letter from './images/letter.png'
import detailsimage from './images/detailsimage.png'
import Confetti from 'react-confetti';
import View from './custom/view';
function App() {
  let images={im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12,im13,im14}
  let imkeys=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  const [loc,setloc]=useState({1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14})
  const [locvl,setlocvl]=useState({1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14})
  const [time,settime]=useState(1)
  const [image,setimage]=useState(null)
  const [open,setopen]=useState(0)
  const [display,setdisplay]=useState(1)
  const [play]=useState(new Audio(music))
  const [playsong]=useState(new Audio(song))
  play.addEventListener('ended',()=>{
    play.play()
  })

  setTimeout(()=>{
    let jj=loc
    jj[(time%14+1)]+=Math.random()*100
    jj[(time%14+1)]%=100
    setloc(jj)
    jj=locvl
    jj[(time%14+1)]+=Math.random()*100
    jj[(time%14+1)]%=100
    setlocvl(jj)
    
    settime(time+1)
  },1000)
  return (
    <div className="App" style={{backgroundImage:'url('+background+')'}} >
     {image&&<View img={image} setimage={setimage}  /> }
     {display==2&& <Confetti style={{position:'absolute',width:'100%',height:'100%'}}/>
     }{display<=2&&<div style={{height:'100%',position:'relative',margin:'auto',display:'flex',flexDirection:'column',justifyContent:'center'}} >
      <img src={cake} style={{height:'50%',position:'relative',}} />
      <button
      onClick={()=>{
        setTimeout(()=>{
          setdisplay("card")
          play.play()
        },16000)
        playsong.play()
        setdisplay(2)
      }}
      style={{padding:12,position:'relative',margin:12,
      borderRadius:50,borderStyle:'none',color:'hotpink',cursor:'pointer'
    }} >Cut the cake
    </button>
     
      </div>
     } {display=="card" && imkeys.map(val=>(
        <div onClick={()=>{
          setimage(images['im'+val])
        }} style={{position:'absolute',top:(loc[val])+'%',right:(locvl[val])+'%', transition:'all 16s ease' }} >
        <Heart img={images['im'+val]} key={val} />
        </div>
      ))}
      
      {display=="card" &&
      < div className='card' onMouseEnter={()=>{setopen((open+1)%2)}} onMouseLeave={()=>{setopen((open+1)%2)}}  ><div 
      // style={{backgroundImage:!open?'url('+card+')':''}}
      className='cardcover' >
        <img src={card} style={{visibility:open?'hidden':''}} className='cover' />
        <img src={covertop} style={{visibility:open?'hidden':''}} className='covertop' />
        <img className='coverimage' src={open?im6:cover} style={{transform:open?'rotateY(180deg)':'', height:'80%',width:'80%',margin:'auto'}} />
      </div>
      <div className='carddetails' style={{opacity:open}} >
      <img src={detailsimage} className='carddetailsimage'/>
      
        <h1 style={{color:'white',fontStyle:'italic',fontFamily:'cursive',position:'relative',zIndex:2}} >Happy Birthday </h1>
        <div style={{backgroundColor:'white',height:'60%',margin:'12%',position:'relative', zIndex:2
      }} >
        <img src={letter} style={{zIndex:1, position:'absolute', width:'100%',height:'100%',top:0,left:0 }}/>

        </div>
      </div>
      </div>}
    </div>
  );
}

export default App;
