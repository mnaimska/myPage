import React from "react";

const Navigation =()=>{
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
    </nav>
    </>)
}

export default Navigation;