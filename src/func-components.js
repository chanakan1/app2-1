import React from 'react';

export function Navbar(){
    const aStyle={
        display:'inline-block',
        color:'blue',
        margin:'10px',
        textDecoration:'none'
    }
   return (
    <div style={{backgroundColor:'#ccc'}}>
        <a href="#"style={aStyle}>Home</a>&nbsp;|&nbsp;
        <a href="#"style={aStyle}>About</a>&nbsp;|&nbsp;
        <a href="#"style={aStyle}>Contect</a>
    </div>
   )
} 
export function Header(){
    return (
        <div style={{textAlign:'center',color:'navy'}}>
<img src="./images/a.jpg" widht="100%"/>
<h2>Hello component</h2>
           <br/><br/><br/>
        </div>
       )
    }
export const Footer=()=>{ //arrow Function
    return(
        <div style={{textAlign:'center'}}>
            &copy;{new Date().getFullYear()} All rights reserved
        </div>
    )
}