import React from "react";
import {Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Additional from "./Additional";
import Employment from "./Employment";
import Photo from "./Photo";
import Extra from "./Extra";
import Education from "./Education";
import Hobby from "./Footer";
import Footer from "./Footer";

const Home =()=>{
    return (
       <>
           <Navigation/>


           <div className="grid-container">

               {/*<div className="Profile">*/}
               {/*<div className="Additional"></div>*/}
                    <Additional/>
                    <Photo/>
                    <Profile/>
                    <Employment/>
                    <Education/>
                    <Extra/>
                    <Footer/>

               {/*</div>*/}

               {/*<div className="Employment"></div>*/}
               {/*<div className="Education"></div>*/}
               {/*<div className="Hobby"></div>*/}
               {/*<div className="Contact-me"></div>*/}
           </div>

       </>
    )
}

export default Home;