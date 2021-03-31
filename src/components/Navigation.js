import React from "react";
import {useState} from "react";
const Navigation =()=>{
        const [toggleMenu, setToggleMenu] = useState(true);
    const toggle=()=>{
        setToggleMenu(!toggleMenu);

    }

    return (<>
    <nav>

        <ul>
            <div className="navigation-web">
                <div className="navigation-li surname">Maria Naimska</div>
                {/*<div className="mn_img"></div>*/}

            </div>
            <div className="navigation-web">
            <li className="navigation-li"><a href="#">Profile</a></li>
            <li className="navigation-li"><a href="#">Employment</a></li>
            <li className="navigation-li"><a href="#">Education</a></li>
            <li className="navigation-li"><a href="#">Hobby</a></li>
            <li className="navigation-li"><a href="#">Contact me</a></li>
            </div>
        </ul>
        <div className="burger-menu container" onClick={toggle}>
            {toggleMenu? <>
                <div className="burger-menu-div1"></div>
                <div className="burger-menu-div2"></div>
                <div className="burger-menu-div3"></div></>:
                <>
                <div className="burgerX1"></div>
                <div className="burgerX2 "></div>
                <div className="burgerX3 "></div></> }

        </div>
    </nav>
    </>)
}

export default Navigation;