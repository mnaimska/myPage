import React from "react";
import {Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Additional from "./Additional";

const Home =()=>{
    return (
       <>
           <Navigation/>


           <div className="grid-container">

               {/*<div className="Profile">*/}
               {/*<div className="Additional"></div>*/}
                    <Additional/>
                    <Profile/>

               {/*</div>*/}

               <div className="Employment"></div>
               <div className="Education"></div>
               <div className="Hobby"></div>
               <div className="Contact-me"></div>
           </div>
           Próba czcionki
           <button className="button"><a href="/work">Work</a></button>
       </>
    )
}

export default Home;