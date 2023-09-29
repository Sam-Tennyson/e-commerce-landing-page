// libs
import React from 'react'

// components

// constants
import { CONSTANTS } from '../../shared/Constants'
import CommonArrivalCard from '../../components/atoms/CommonArrivalCard'
import { ARRIVALS_DATA } from '../../data/ArrivalsData'

import "./style.css"

const ENUM = {
    TRENDING: "Trending from new and modern mens style collection",
    NEW_INSPIRATION: "New Inspiration 2023",
    NEW_COLLECTIONS: "New Collections!",
    DESC: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    SHOP_NOW: "Show Now",
    IMAGE_URL: "https://img.freepik.com/premium-photo/female-foot-with-red-stiletto-heels-shoe-white-background_144962-20249.jpg?w=2000"
}

const NewArrivals = () => {
    return (
        <>
            <div>
                <h1 className="text-center pt-5 fw-bolder">{CONSTANTS.NEW_ARRIVALS}</h1>
                <p className="text-center pb-5">{ENUM.TRENDING}</p>
                <div className="d-flex flex-wrap justify-content-around gap-5 pb-5">
                    {ARRIVALS_DATA.map((item) => (
                        <CommonArrivalCard
                            key={item?._id}
                            data={item}
                        />
                    ))}
                </div>
            </div>
            <div className="w-100 row mx-auto p-0 bg-white rounded shadoww">
                <div className="col-12 col-md-7 my-auto mx-auto p-3 text-md-start text-center text-secondary" >
                    {ENUM.NEW_INSPIRATION}
                    <h1 className="d-none d-md-block m-0 p-0 new-collection" >{ENUM.NEW_COLLECTIONS.toUpperCase()}</h1>
                    <h3 className="d-md-none add-primary-color" >{ENUM.NEW_COLLECTIONS.toUpperCase()}</h3>
                    <p> {ENUM.DESC} </p>
                    <button className="btn fw-bold text-white px-5 shop-now" > {ENUM.SHOP_NOW.toUpperCase()} </button>
                </div>
                <div className="col-12 col-md-5 text-end p-0 collection-img">
                    <img src={ENUM.IMAGE_URL} className="img-fluid" />
                </div>
            </div>
        </>
    )
}

export default NewArrivals