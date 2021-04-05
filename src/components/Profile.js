import React from "react";

const Profile =()=>{
    return <>

        <div className="Profile">

            <div className="TitleProfile">

                <h1>Key competences</h1>
                <hr className="underline"/>
            </div>
        <div className="Humanistic"><h2>Humanistic: </h2>
            <p>
            cultural and historical field and work experience for
            governmental institutions, universities and non-governmental organisations.
            </p>
        </div>
            <hr className="underline-black"/>
        <div className="Technical"><h2>Technical: </h2>
            <p>
            independent management of the projects,
            active knowledge of the new technologies
            (web responsive design, web applications, mobile applications),
            external and internal stakeholders’ management,
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