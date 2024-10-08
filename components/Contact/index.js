import React, { useState, useRef } from "react";
import validator from "validator";
import { ContactWraper } from "./styles";
import i18next from 'i18next';
import { API_URL } from '../../utils/config';

function Contact({ data }) {
	const el = useRef(null);
	const [height, setHeight] = useState();
	const [loading, setLoading ] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState([]);


	const submitContact = async (e) => {
		e.preventDefault();

		setError([]);
		setSuccess(false);

		// set a min-height for the contact wrapper
		let portfolioHeight = el.current.offsetHeight;
		setHeight(portfolioHeight);

		// Verify if the user is a human
		if (e.target.email.value.length){
			console.log('você preencheu o campo que nao devia!!');
			setSuccess(true);
			return
		}

		// Phone validator
		if (!validator.isMobilePhone(e.target.phone.value)){
			setError([i18next.t('contact-form.invalid-phone')]);
			return
		}
		setLoading(true);

		// Get Form data
		const data = {
			"webform_id":"contact",
			"name": e.target.name.value,
			"email": e.target.emailclient.value,
			"phone": e.target.phone.value,
			"subject": e.target.subject.value,
			"message": e.target.message.value,
		}

		const lang = i18next.language === "en" ? "" : "pt-pt/";
		// Fetch to API
		const res = await fetch(
			`${API_URL}${lang}webform_rest/submit`,
			{
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			}
		);

		const result = await res.json();

		if(result.error){
			let err = Object.values(result.error);
			console.log(err);

			setError(err);
			setLoading(false);
		}
		else {
			setSuccess(true);
			setLoading(false);
		}
	}

	return (
        <ContactWraper id="contact" className="contact">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>{i18next.t('contact')}</h2>
				</div>

				<div className="row mt-1">
					<div className="col-lg-4">
						<div className="info">
							{/* <div className="address">
								<i className="bi bi-geo-alt"></i>
								<h4>{t('location')}:</h4>
								<p>Empty</p>
							</div> */}

							<div className="email">
								<i className="bi bi-envelope"></i>
								<h4>Email:</h4>
								<a href={"mailto:" + data.email }>
									<p>{data.email}</p>
								</a>

							</div>

							<div className="phone">
								<i className="bi bi-phone"></i>
								<h4>{i18next.t('contact-form.phone')}:</h4>
								<a href={"tel:" + data.phone}>
									<p>{ data.phone }</p>
								</a>

							</div>
						</div>
					</div>

					<div className="col-lg-8 mt-5 mt-lg-0" ref={el} style={{ minHeight: height }}>
						<div className={"loading " + (loading ? "d-flex" : "")}>{i18next.t('contact-form.sending')}</div>

						<form onSubmit={e => submitContact(e)} action="" method="post" role="form" className={"email-form " + (loading || success ? "d-none" : "")}>
							<div className="row">
								<div className="col-md-6 form-group">
									<input type="text" name="name" className="form-control" id="name" placeholder={i18next.t('contact-form.your-name') + "*"} required/>
								</div>
								<div className="col-md-6 form-group mt-3 mt-md-0">
									<input type="email" className="form-control" name="emailclient" id="emailclient" placeholder={i18next.t('contact-form.your-email') + "*"} required/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 form-group">
									<input type="telephone" name="phone" className="form-control" id="phone" placeholder={i18next.t('contact-form.your-phone')}/>
								</div>
								<div className="col-md-6 form-group mt-3 mt-md-0">
								<input type="text" className="form-control" name="subject" id="subject" placeholder={i18next.t('contact-form.subject')}/>
								</div>
							</div>
							<div className="form-group mt-3">
								<textarea className="form-control" name="message" rows="5" placeholder={i18next.t('contact-form.message') + "*"} required></textarea>
							</div>

							<div className={"text-center " + (loading ? "d-none" : "")}><button type="submit">{i18next.t('contact-form.send')}</button></div>
							<input type="email" className="d-none" name="email" id="email" placeholder="Your Email"/>
						</form>

						<div className="my-3">
							<div className={"error-message " + (error.length > 0 ? "d-block" : "")}>{ error.length > 0 ? error.map(item => <span key={item}>{item}</span>) : null }</div>
							<div className={"sent-message " + (success ? "d-block" : "")}>{i18next.t('contact-form.message-success')}</div>
						</div>
					</div>
				</div>
			</div>
        </ContactWraper>
	);
}

export default Contact;
