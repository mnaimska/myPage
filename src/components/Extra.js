import React from "react";
import {TeachIcon, ScannerIcon, FaceAgentIcon, ApplicationIcon, AccountBoxIcon} from "@icons/material"
const Extra =()=>{
    return (<>
        <div className="Extra" id="Extra">
            <div className="TitleProfile">
            <h1 >Extra-curricular activities</h1>
        <hr className="underline"/>
            </div>
            <div className="flexbox-extra">

                <div className="single-window-extra first">

                        <span className="span-date">May 2017</span>

                    <TeachIcon className="extra-icon"/>

                <span className="span-extra">Lecturer at EUROCLIO, Donostia / San Sebastián</span>
                    <p className="small-p">Lecturer at 24th EUROCLIO Annual Conference “How can History Education change today?”, San Sebastian (200 history teachers for secondary school in CEE)</p>

                </div>

                <div></div>
                <div></div>
                <div></div>
                <div className="single-window-extra second">
                    <span className="span-date">May 2016</span>
                    <TeachIcon className="extra-icon"/>
                    <span className="span-extra">Workshop chairman at EUROCLIO, Belfast</span>
                    <p className="small-p">Workshop chairman at 23rd EUROCLIO Annual Conference “Remembering the Difficult Past through History and Heritage Education”, Belfast (150 history teachers for secondary school in CEE);</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className="single-window-extra second">
                    <ScannerIcon className="extra-icon"/>
                <span className="span-extra">Digital Coordinator at Dni Sadyby (Sadyba Days), Warsaw</span>
                    <p className="small-p">Voluntary digitalisation of the documents of the families living in one of the Warsaw districts in the aim of preserving local history. </p>
                </div>
                <div className="single-window-extra first"><ApplicationIcon className="extra-icon"/>
                <span className="span-extra">Application Content Designer at Dobre Strony Edukacji (Good Sights of Education), Warsaw</span>
                <p className="small-p">Creating educational application concerning the Polish history, ordered by the Polish History Museum in Warsaw.</p>
                </div>
                <div></div>
                <div></div>
                <div></div>

                <div className="single-window-extra second">
                    <FaceAgentIcon/>
                <span className="span-extra">Guide Tour in Warsaw at Local Newspapers Society, Warsaw</span>
                </div>
                <div></div>
                <div></div>
                <div></div>

                <div className="single-window-extra second"><AccountBoxIcon/>
                <span className="span-extra">Member of the University Parliament at University of Warsaw</span>
                </div>


            </div>

        </div>
        </>)
}
export default Extra;