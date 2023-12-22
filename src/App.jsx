import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Api from './Services/Api'
import axios from "axios"
import Slider from "./Components/Slider";
import Package from "./Components/Package";
import VerticalMovieList from "./Components/VerticalMovieList";
import HorizontalMovieList from "./Components/HorizontalMovieList";
import GenreList from './Constant/GenreList';

export default function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <div className=' max-w-[95%] mx-auto'>
        <Package/>
        {/* <VerticalMovieList title={'inilah'} idReq={35}/> */}
        <HorizontalMovieList title={'Up Coming Movie'} idReq={''}/>
        {GenreList.genere.map((item, index)=>index<4&&(
          <VerticalMovieList key={index} title={item.name} idReq={item.id}/>
        ))}

      </div>
    </>
  )
}