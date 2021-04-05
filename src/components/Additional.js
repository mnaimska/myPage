import React, {useState} from "react";

import {CellphoneIcon,
        EmailOutlineIcon,
        CarIcon,
        DogSideIcon,
        WrenchOutlineIcon,
        EarthIcon } from "@icons/material";


const Additional =()=>{

    const [showAll, setShowAll]=useState(false);
    const [cellphone, setCellphone] = useState(false);
    const [email, setEmail]=useState(false);
    const [car, setCar]=useState(false);
    const [skills, setSkills]=useState(false);
    const [languages, setLanguages]=useState(false);
    const [dog, setDog]=useState(false);


    const handleShowAll=()=>{
        setCellphone(true);
        setEmail(true);
        setCar(true);
        setSkills(true);
        setLanguages(true);
        setDog(true);
        setShowAll(!showAll);
    }
    const handleSwitchOff =()=>{
        setCellphone(false);
        setEmail(false);
        setCar(false);
        setSkills(false);
        setLanguages(false);
        setDog(false);
        setShowAll(!showAll);
    }
    const handleCellphone=()=>{
        setCellphone(!cellphone);
    }
    const handleEmail=()=>{
        setEmail(!email);
    }
    const handleCar=()=>{
        setCar(!car);
    }
    const handleSkills=()=>{
        setSkills(!skills);
    }
    const handleLanguages=()=>{
        setLanguages(!languages);
    }
    const handleDog=()=>{
        setDog(!dog);
    }
    return <>
         <div className="Additional web-additional">
            <div className="additional-btns">
                {!showAll? <button onClick={handleShowAll} className="show-hide-btn">Show all details</button>:
                    <button onClick={handleSwitchOff} className="show-hide-btn">Hide all details</button>
                }

            </div>

            <button className="additional-icon" onClick={handleCellphone}>
                {cellphone? <><br/><CellphoneIcon/> <br/>
                    <img className="italian-flag"/>
                    +39 393 822 8296
                    <br/>
                    <img className="polish-flag"/>
                    +48 797 955 022
                </>:<CellphoneIcon/> }
            </button>
            <button className="additional-icon" onClick={handleEmail}>{
                email?<><EmailOutlineIcon/><br/> mnaimska@gmail.com</>:<EmailOutlineIcon/>

            }</button>
            <button className="additional-icon" onClick={handleCar}>
                {car? <><CarIcon/><br/>
                        Driving Licence B
                    </>

                    :<CarIcon/>}
            </button>
            <button className="additional-icon" onClick={handleSkills}>
                {skills?<><br/><WrenchOutlineIcon/><br/>
                    PRINCE 2 Foundation<br/>
                    JavaScript, React js, HTML/CSS<br/>
                    GitHub<br/>
                    Agile Scrum, Trello <br/>
                    Microsoft Office Package<br/>
                    CMS (Wordpress, Joomla)


                </>:<WrenchOutlineIcon/> }
            </button>
            <button className="additional-icon" onClick={handleLanguages}>{languages?
                <><br/><EarthIcon/><br/>
                    English C1 <br/>
                    Italian B2<br/>
                    German B1<br/>
                    Latin <br/>
                    Polish mothertongue<br/>
                </>:<EarthIcon/>
            }</button>
            <button className="additional-icon" onClick={handleDog}>{dog?<><br/><DogSideIcon/><br/>
                Training the retrieving dogs
            </>:<DogSideIcon/>}</button>

        </div>

            <div className="Additional mobile-additional">
                <div className="additional-btns">
                    {!showAll? <button onClick={handleShowAll} className="show-hide-btn">Show all details</button>:
                        <button onClick={handleSwitchOff} className="show-hide-btn">Hide all details</button>
                    }

                </div>

                <button className="additional-icon" onClick={handleCellphone}>
                    {cellphone? <><br/><CellphoneIcon/> <br/>
                        <img className="italian-flag"/>
                        +39 393 822 8296
                        <br/>
                        <img className="polish-flag"/>
                        +48 797 955 022
                    </>:<CellphoneIcon/> }
                </button>
                <button className="additional-icon" onClick={handleEmail}>{
                    email?<><EmailOutlineIcon/><br/> mnaimska@gmail.com</>:<EmailOutlineIcon/>

                }</button>
                <button className="additional-icon" onClick={handleCar}>
                    {car? <><CarIcon/><br/>
                            Driving Licence B
                        </>

                        :<CarIcon/>}
                </button>
                <button className="additional-icon" onClick={handleSkills}>
                    {skills?<><br/><WrenchOutlineIcon/><br/>
                        PRINCE 2 Foundation<br/>
                        JavaScript, React js, HTML/CSS<br/>
                        GitHub<br/>
                        Agile Scrum, Trello <br/>
                        Microsoft Office Package<br/>
                        CMS (Wordpress, Joomla)


                    </>:<WrenchOutlineIcon/> }
                </button>
                <button className="additional-icon" onClick={handleLanguages}>{languages?
                    <><br/><EarthIcon/><br/>
                        English C1 <br/>
                        Italian B2<br/>
                        German B1<br/>
                        Latin <br/>
                        Polish mothertongue<br/>
                    </>:<EarthIcon/>
                }</button>
                <button className="additional-icon" onClick={handleDog}>{dog?<><br/><DogSideIcon/><br/>
                    Training the retrieving dogs
                </>:<DogSideIcon/>}</button>

            </div>




    </>
}
export default Additional;