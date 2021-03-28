import React from "react";
import {Switch} from "react-router-dom";
import Navigation from "./Navigation";

const Home =()=>{
    return (
       <>
           <Navigation/>
           Próba czcionki
           <button className="button"><a href="/work">Work</a></button>
       </>
    )
}

export default Home;