import React from "react";

const Profile =()=>{
    return <>

        <div className="Profile" id="Profile">

            <div className="TitleProfile">

                <h1>Key competences</h1>
                <hr className="underline"/>
            </div>
        <div className="Humanistic slide-in-left"><h2>Humanistic: </h2>
            <p>
            cultural and historical field and work experience for
            governmental institutions, universities and non-governmental organisations.
            </p>
        </div>
            <hr className="underline-black"/>
        <div className="Technical slide-in-right"><h2>Technical: </h2>
            <p>
            independent management of the projects,
            active knowledge of the new technologies
            (web responsive design, web applications, mobile applications),
            external and internal stakeholdersâ€™ management,
            budget and resources management, data analysis,
            lecture and workshops conduction, quality research,
            negotiations and contract management,
            digital product development.
            </p>

            </div>
            <hr className="underline-black"/>
        </div>


    </>
}
export default Profile;