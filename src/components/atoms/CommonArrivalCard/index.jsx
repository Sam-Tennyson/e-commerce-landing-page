// libs
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// constants
import { CONSTANTS } from '../../../shared/Constants'

// styles
import "./style.css"

const CommonArrivalCard = (props) => {
    const { data } = props
    return (
        <>
            <div className="my-card rounded arrival">
                <h6 className="text-center mt-5 arrival-head">{data?.heading}</h6>
                <p className="text-center text-secondary w-75 mx-auto">{data?.desc}</p>
                <div className="w-100 px-3 pb-1 arrival-img">
                    <img src={data?.image_url} className="card-img-top mx-auto w-100 rounded" />
                </div>
                <div className="w-100 px-3 d-flex justify-content-between">
                    <h3 className='arrival-amount'>{data?.amount}</h3>
                    <div className="pt-2">
                        <FontAwesomeIcon icon={faStar} color='#ffc107' />
                        <FontAwesomeIcon icon={faStar} color='#ffc107' />
                        <FontAwesomeIcon icon={faStar} color='#ffc107' />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className="w-100 px-3 text-secondary ">
                    <h6 className="text-dark m-0">{CONSTANTS.SIZE.toUpperCase()}</h6>
                    <span className="pe-2">XS</span>
                    <span className="pe-2">S</span>
                    <span className="pe-2">M</span>
                    <span className="pe-2 text-dark">L</span>
                    <span className="pe-2">XL</span>
                    <h6 className="text-dark pt-1">{CONSTANTS.COLORS.toUpperCase()}</h6>
                    <span className="me-2 rounded-circle px-2 bg-warning"></span>
                    <span className="me-2 rounded-circle px-2 bg-danger"></span>
                    <span className="me-2 rounded-circle px-2 bg-primary"></span>
                </div>
                <div className="px-3 py-2 mt-1 rounded text-center text-white fw-bold arrival-add-cart">
                    {CONSTANTS.ADD_TO_CART}
                </div>
            </div>

        </>
    )
}

export default CommonArrivalCard