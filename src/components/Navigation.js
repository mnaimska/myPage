import React from "react";
import {useState} from "react";
const Navigation =()=>{

        const [toggleMenu, setToggleMenu] = useState("burger-menu");

    const toggle=()=>{
        setToggleMenu(!toggleMenu);

    }

    return (<>

    <nav className=" sticky-nav">

        <ul>
            <div className="navigation-web">
                <div className="navigation-li surname">Maria Naimska</div>

                {/*<div className="mn_img"></div>*/}

            </div>

            <div className="navigation-web">
            <li className="navigation-li"><a href="#Profile">Profile</a></li>
            <li className="navigation-li"><a href="#Employment">Employment</a></li>
            <li className="navigation-li"><a href="#Education">Education</a></li>
            <li className="navigation-li"><a href="#Extra">Extra</a></li>
            {/*<li className="navigation-li"><a href="#Footer">Details</a></li>*/}
            </div>
        </ul>

        <div className="burger-menu container" onClick={toggle}>
            {toggleMenu? <>
                <div className="burger-menu-div1"></div>
                <div className="burger-menu-div2"></div>
                <div className="burger-menu-div3"></div></>:
                <>
                    <div>
                <div className="burgerX1"></div>
                <div className="burgerX2 "></div>
                <div className="burgerX3 "></div>
                    </div>
                    <div>
                        <ul className="navigation-mobile">
                            <li className="mobile-nav"><a href="#">Profile</a></li>
                            <li className="mobile-nav"><a href="#Employment">Employment</a></li>
                            <li className="mobile-nav"><a href="#Education">Education</a></li>
                            <li className="mobile-nav"><a href="#Extra">Extra</a></li>
                            {/*<li className="mobile-nav"><a href="#Footer">Details</a></li>*/}
                        </ul>

                    </div>

                </> }

        </div>
    </nav>

    </>)
}

export default Navigation;