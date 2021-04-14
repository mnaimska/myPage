import React from "react";
import {useState} from "react";
import {MenuDownIcon, MenuUpIcon} from "@icons/material"

const Employment=()=>{
    const [project1, setProject1]=useState(false);
    const [coordinator, setCoordinator]=useState(false);
    const handleEmployment1=()=>{
        setProject1(!project1);
    }
    const handleEmployment2=()=>{
        setCoordinator(!coordinator);
    }

    return (<>
        <div className="Employment" id="Employment">
        <div className="TitleProfile">
            <h1>Employment history</h1>
            <hr className="underline"/>
        </div>


            <div className="employment-block">

                <div style={{position:"relative"}}>
                    <span className="span-title">January 2014 - Present</span>
                </div>

            <button className="btn-employment" onClick={handleEmployment1}>
                <div style={{position:"relative"}} className="when-small">
                    <span className="span-title-small">January 2014 - Present</span>
                </div>
                Project manager at Institute of the
                European Network Remembrance and Solidarity,
                Warsaw/Turin
                <p>Management of several (over 5) multinational projects for
                    CEE countries within cultural/historical area.
                    Each project required coordination of project tasks between
                    individuals and institutions representing over 6 different countries.</p>
                <MenuDownIcon/>
            </button>



                {project1?<>
                    <div className="flex-row">
                    <div>
                    <h3 className="red-focus">Key responsibilities:</h3>
                    <p>fundraising, project planning and management,
                        budget control and reporting to the Academic Board and the governments of the CEE countries,
                        resources applications, cooperation with PR department and stakeholder management.</p>
                    </div>
                    <div>
                    <h3 className="red-focus">Key achievements:</h3>
                    <p >1) development of the multilingual (7 languages) web portal
                        <a className="link-employment" href="http://www.hi-storylessons.eu"> www.hi-storylessons.eu</a> which offers more than 200 articles,
                        number of animations, infographics, essays and lessons' scenarios
                        on 20th century Europe with particular focus on CEE countries dedicated to the
                        secondary schools and history teachers. I have personally managed
                        development of portal content, managing development of materials
                        by number of world known history professors, researchers, graphic designers and translators. <br/><hr className="underline-black"/>
                        2) president of the local organising committee of the annual European Remembrance Symposium  (Paris 2019, Tallinn 2021 and historical conference at the EUI in Florence)
                        for over 250  professors in history, teachers, representants of the institutions aiming to
                        discuss different perspectives of the European history,<br/><hr className="underline-black"/>
                        3) Creation, development and marketing of the historical educational web portal for teachers and students from CEE, including content development, supply chain management and technical management. Till 2021 digital products of this project  reached upon 800.000 views.

                    </p>
                    </div>
                    </div>
                </>:<></>}
                <div>
                </div>


            <div className="employment-block">
                <div style={{position:"relative"}}>
                    <span className="span-title2">January 2011 - December 2013</span>
                </div>
            <button className="btn-employment middle" onClick={handleEmployment2}>
                <div style={{position:"relative"}} className="when-small">
                    <span className="span-title2-small">January 2011 - December 2013</span>
                </div>
                Digital Coordinator at Citibank Handlowy Foundation,
                Pointa Foundation, National Digital Archives, Warsaw<br/>
            <MenuDownIcon/>
            </button>



                    {coordinator?<>
                        <div>
                        <p>Digital coordinator in 4 projects aiming at creating data
                            base and digitalization of old documents</p>
                    </div>
                    </>:<></>}



            </div>

            <button className="btn-employment last">Project Manager of the 2nd International Montessori Conference at
                Polish Montessori Institute, Warsaw</button>

        </div>
        </div>


    </>)
}
export default Employment;