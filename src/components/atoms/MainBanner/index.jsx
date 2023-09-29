import React from "react"
import "./style.css"

const ENUM = {
    LET_S: "Let's",
    MEN_S: "Men's",
    UNIQUE: "Unique",
    ASHION: "ashion",
    EXPLORE_SOME: " Explore Some ",
    F: " F",
    SHOE_COLLECTION: "Shoe Collections",
    image_url: "https://img.freepik.com/free-photo/low-section-woman-with-her-red-shopping-bag_329181-9199.jpg?w=360&t=st=1694064079~exp=1694064679~hmac=33d966f0097b9d455da6b9a8d15865a57b3e97549853caf0f1fd279d18bfb52e"
}

const MainBanner = () => {
    return (
        <>
            <div className="w-100 main-banner row d-flex shadoww flex-wrap mx-auto text-white rounded back" >

                <div className="col-12  col-md-7 my-auto mx-auto px-5 text-md-start text-center main-banner-child">
                    <h1 className="d-none d-md-block m-0 p-0" >
                        <span className="px-2 text-white lets">{ENUM.LET_S.toUpperCase()}</span>
                        {ENUM.EXPLORE_SOME.toUpperCase()}
                        <span className="unique">{ENUM.UNIQUE.toUpperCase()}</span>
                              {ENUM.F.toUpperCase()}
                        <span className="asion">{ENUM.ASHION.toUpperCase()}</span>..!
                    </h1>
                    <h3 className="d-md-none p-5" >
                        <span className="lets" >{ENUM.LET_S.toUpperCase()}</span> 
                            {ENUM.EXPLORE_SOME.toUpperCase()}
                        <span className="unique">{ENUM.UNIQUE.toUpperCase()}</span>
                            {ENUM.F.toUpperCase()}
                        <span className="asion">{ENUM.ASHION.toUpperCase()}</span>..!
                    </h3>
                </div>
                <div className="col-12 col-md-5 pb-5">
                    <img src={ENUM.image_url} className="img-fluid mb-5" />
                </div>
            </div>
        </>
    )
}

export default MainBanner