import React from 'react'

export default function Button(){
 const onClickButtonOK =() =>{
 alert('OK')
 }
const onClickButtonCan =() =>{
  alert('Cancel')

 }
 let banner = './image/1.jpg'
 let url = 'http://1js.org'

 const bannerClick =()=>{
   window.open(url)
 }
 return(
   <>
 <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}}/> 
 <button onClick={onClickButtonOK}>OK</button>
 <button onClick={onClickButtonCan}>Cancel</button>
 </>

 )
}

