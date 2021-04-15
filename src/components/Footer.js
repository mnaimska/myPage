import React from "react";
import {MenuUpIcon} from "@icons/material";
const Footer=()=>{

    return (<>

    <div className="Footer">
        <div>
        <h3 className="h3-details">GDPR</h3>
        <p className="details-p">I give my permission for the processing
            of my personal data that is essential for the recruitment process,<br/>
            in accordance with the Act of 29.08.1997 on the Protection of Personal Data
            (Journal of Laws No. 133, item 883 amended).</p></div>

        <div>
            <a href="/"><MenuUpIcon style={{fill:"red",
                width:"50px",
                height:"50px",
            }}/></a>
            <p className="details-p">© mnaimska</p>

        </div>

    </div>
    </>)
}
export default Footer;