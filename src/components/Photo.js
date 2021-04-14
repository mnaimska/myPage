import React from "react";
import Slider from "react-slick";
const Photo =()=>{

const settings={
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

    return (<>
        <div className="Photo">
            <Slider {...settings} className="slider">
                <div className="container-photo">
                    <div className="single-photo-cv">

                    </div>
                </div>
                <div className="container-photo">
                    <div className="second-photo-hobby"></div>
                </div>
                <div className="container-photo">
                    <div className="single-photo-hobby2">
                        {/*<span className="span-photo">Italian Championship in Retrieving Working Test</span>*/}
                    </div>
                </div>
                <div className="container-photo">
                    <div className="single-photo-work2">

                        {/*<span className="span-photo">Work/ Conference in Paris</span>*/}
                    </div>
                </div>
            </Slider>


            {/*<div className="container-photo">*/}

            {/*    <div className="single-photo-cv"></div>*/}

            {/*    <div className="second-photo-hobby"></div>*/}
            {/*    /!*<div className="container-photo-2">*!/*/}

            {/*    <div className="single-photo-work2"></div>*/}
            {/*        <div className="single-photo-hobby2"></div>*/}
            {/*        <div className="single-photo-hobby3"></div>*/}
            {/*    <div className="single-photo-work"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    </>)
}
export default Photo;