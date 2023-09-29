// libs
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// constants
import { CONSTANTS } from '../../../shared/Constants'

// styles
import "./style.css"

const CommonFeatureCard = (props) => {
    const { data } = props
    return (
        <>
            <div className="card pt-2 rounded shadoww featured">
                <img src="https://img.freepik.com/premium-photo/young-asian-athlete-woman-tying-running-shoes_38161-1144.jpg?w=740" className="card-img-top mx-auto" />
                <div className="card-body text-center">
                    <h5 className="text-center" >{data?.heading}</h5>						
                    <p className="card-text">{data?.desc}</p>
                    <h6 className="text-dark fw-bolder h4">{data?.amount}</h6>
                    <FontAwesomeIcon icon={faStar} color='#ffc107' />
                    <FontAwesomeIcon icon={faStar} color='#ffc107' />
                    <FontAwesomeIcon icon={faStar} color='#ffc107' />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="p-3 text-center rounded text-white fw-bold add-cart" >{CONSTANTS.ADD_TO_CART.toUpperCase()}</div>
            </div>
        </>
    )
}

export default CommonFeatureCard