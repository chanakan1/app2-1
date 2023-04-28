import React from 'react';

export function Header(){
    return (
        <div style={{textAlign:'center',color:'navy'}}>
<h2>ข้อมูลส่วนตัว</h2>
           <br/><br/><br/>
        </div>
       )

    }
    export function Myimages(){
        return(
        <div style={{textAlign:'center'}}>
        <img src="./images/ann.jpg" width="200px"/>
                </div>   
        )
    }
    export function MyDate(){
        return(
        <div style={{textAlign:'center'}}>
        <a>ชื่อ-สกุล ชนากานต์ จิตตั้งมั่น</a><br/>
        <a>ชื่อเล่น แอน</a><br/>
        <a>อายุ 23</a><br/>
        <a>ห้อง DT26521N</a><br/>
        <a>สาขา เทคโนโลยีธุรกิจดิจิทัล</a><br/>
        <a>มหาวิทยาลัยราชมงคลสุวรรณภูมิ</a><br/>
                </div>   
        )}