import React, {useState} from "react";
import {MenuUpIcon} from "@icons/material";
import {CellphoneIcon,
    EmailOutlineIcon,
    WrenchOutlineIcon,
    EarthIcon } from "@icons/material";
const Footer=()=>{

    const [cellphoneFooter, setCellphoneFooter]=useState(false);
    const [emailFooter, setEmailFooter]=useState(false);
    const handleCellphoneFooter=()=>{
        setCellphoneFooter(!cellphoneFooter);
    }

    const handleEmailFooter=()=>{
        setEmailFooter(!emailFooter);
    }
    return (<>

    <div className="Footer">
        <div>
        </div>
        <div>
            <CellphoneIcon className="footer-icon" onClick={handleCellphoneFooter}/>
            {cellphoneFooter? <>
                <div className="footer-display">
                    <div className="footer-info">
                        <img className="italian-flag flag-footer"/>
                        +39 393 822 8296
                        <br/>
                        <img className="polish-flag flag-footer"/>
                        +48 797 955 022</div></div>
            </>:<CellphoneIcon/> }
        </div>
        <div className="media-footer">

        <div>
            <EmailOutlineIcon className="footer-icon" onClick={handleEmailFooter}/>
            {emailFooter?<>
                <div className="footer-display">
                   <span className="footer-info"> mnaimska@gmail.com</span>
                </div>
            </>:<EmailOutlineIcon/>}
       </div>

        </div>

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