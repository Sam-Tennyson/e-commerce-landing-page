import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const ENUM = {
	YOUR_LOGO: "Your Logo",
	TAGLINE: "Your Tagline here",
	DESC: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
	CONTACT_US: "Contact Us",
	MOBILE: "+91 999 9 9999 99",
	MAIL: "loremipsumsol@gmail.com",
	SUBSCRIBE: "Subscribe",
	SUBCRIBE_MORE: "Subscribe more info",
	INFORMATION: "Information",
	ABOUT_US: "About Us",
	BLOG: "Blog",
	EVENTS: "Events",
	SOURCES: "Sources",
	SUPPORT: "Support",
	PRIVACY_POLICIES: "Privacy Policy",
	TERMS_CONDITIONS: "Terms & conditions",
	HELPFUL_LINKS: "Helpful Links",
	LOREM: "Lorem Ipsum",
}

const SOCIAL_LINKS = {
	DUMMY: "https://snipbyte.com"
}

const Footer = () => {
	return (
		<>
			<footer className="p-5 w-100 bg-dark shadoww rounded text-white footer">
				<div className="row py-2">
					<div className="col-12 col-md-3 col-lg-3 col-xl-3 col-sm-3 pe-5">
						<h4 className="m-0">{ENUM.YOUR_LOGO}</h4>
						<p>{ENUM.TAGLINE}</p>

						<h5 className="m-0 pt-4 add-primary-color">{ENUM.ABOUT_US}</h5>
						<p>{ENUM.DESC}</p>

						<h5 className=" pt-4 add-primary-color">{ENUM.CONTACT_US}</h5>
						<i className="fas fa-phone rounded me-3 add-primary-color" >
							<FontAwesomeIcon icon={faPhone} />
						</i>
						{ENUM.MOBILE}
						<br />
						<i className="fas fa-envelope rounded me-3 add-primary-color" >
							<FontAwesomeIcon icon={faEnvelope} />
						</i>
						{ENUM.MAIL}
					</div>
					<div className="col-12 col-md-3 col-lg-3 col-xl-3 col-sm-3 ms-md-5 pt-4 p-0">
						<h5 className="pt-4 add-primary-color" >{ENUM.INFORMATION}</h5>
						<ul className="list-unstyled">
							<li>{ENUM.ABOUT_US}</li>
							<li>{ENUM.LOREM}</li>
							<li>{ENUM.CONTACT_US}</li>
							<li>{ENUM.BLOG}</li>
							<li>{ENUM.EVENTS}</li>
						</ul>

					</div>
					<div className="col-12 col-md-3 col-lg-3 col-xl-3 col-sm-3 pt-4 p-0">
						<h5 className="pt-4 add-primary-color" >{ENUM.HELPFUL_LINKS}</h5>
						<ul className="list-unstyled">
							<li>{ENUM.SOURCES}</li>
							<li>{ENUM.LOREM}</li>
							<li>{ENUM.SOURCES}</li>
							<li>{ENUM.TERMS_CONDITIONS}</li>
							<li>{ENUM.PRIVACY_POLICIES}</li>
						</ul>
					</div>
					<div className="col-12 col-md-3 col-lg-3 col-xl-3 col-sm-3 py-5 subscribe" >
						<h6 className="pt-4 mb-4">{ENUM.SUBCRIBE_MORE}</h6>
						<div className="input-group flex-nowrap mb-3">
							<span className="input-group-text" id="addon-wrapping">
								<i>
									<FontAwesomeIcon icon={faEnvelope} />
								</i>
							</span>
							<input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
						</div>
						<a href="" className="btn text-white add-cart">{ENUM.SUBSCRIBE}</a>
					</div>
				</div>
				<hr />
				<div className=" w-100 m-0 h5 d-flex justify-content-center  ">
					<a href={SOCIAL_LINKS.DUMMY}>
						<i className="p-1 text-white rounded-circle me-3 " >
							<FontAwesomeIcon icon={faFacebook} />
						</i>
					</a>
					<a href={SOCIAL_LINKS.DUMMY}>
						<i className="p-1 text-white rounded-circle me-3" >
							<FontAwesomeIcon icon={faInstagram} />
						</i></a>
					<a href={SOCIAL_LINKS.DUMMY}>
						<i className="p-1 text-white rounded-circle me-3" >
							<FontAwesomeIcon icon={faTwitter} />
						</i>
					</a>
					<a href={SOCIAL_LINKS.DUMMY}>
						<i className="p-1 text-white rounded-circle" >
							<FontAwesomeIcon icon={faWhatsapp} />
						</i></a>
				</div>
			</footer>
		</>
	)
}

export default Footer