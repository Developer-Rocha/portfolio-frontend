import React, { useState } from "react";
import { ContactWraper } from "./styles";
import { useMutation } from "@apollo/client";
import { POST_CONTACT } from "../../lib/apollo/mutations/postContact";

function Contact() {

	const [loading, setLoading ] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState([]);

	const submitContact = async (e) => {
		e.preventDefault();

		setLoading(true);

		const arr = {
			"webform_id":"contact",
			"name": e.target.name.value,
			"email": e.target.email.value,
			"subject": e.target.subject.value,
			"message": e.target.message.value,
		}

		await submitForm({variables: {values: JSON.stringify(arr)}})
	}

	const [submitForm] = useMutation(POST_CONTACT, {onCompleted({submitForm}) {

		if (submitForm.errors.length > 0) {
			setError(submitForm.errors);
		}
		else {
			setSuccess(true);
		}

		setLoading(false);
	}} )

	return (
        <ContactWraper id="contact" className="contact">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Contact</h2>
				</div>

				<div className="row mt-1">
					<div className="col-lg-4">
						<div className="info">
							<div className="address">
								<i className="bi bi-geo-alt"></i>
								<h4>Location:</h4>
								<p>A108 Adam Street, New York, NY 535022</p>
							</div>

							<div className="email">
								<i className="bi bi-envelope"></i>
								<h4>Email:</h4>
								<p>info@example.com</p>
							</div>

							<div className="phone">
								<i className="bi bi-phone"></i>
								<h4>Call:</h4>
								<p>+1 5589 55488 55s</p>
							</div>
						</div>
					</div>

					<div className="col-lg-8 mt-5 mt-lg-0">

						<form onSubmit={e => submitContact(e)} action="" method="post" role="form" className="php-email-form">
							<div className="row">
								<div className="col-md-6 form-group">
									<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
								</div>
								<div className="col-md-6 form-group mt-3 mt-md-0">
									<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
								</div>
							</div>
							<div className="form-group mt-3">
								<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
							</div>
							<div className="form-group mt-3">
								<textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
							</div>
							<div className="my-3">
								<div className={"loading " + (loading ? "d-block" : "")}>Loading</div>
								<div className={"error-message " + (error.length > 0 ? "d-block" : "")}>{ error.length > 0 ? error.map(item => <span>{item}</span>) : null }</div>
								<div className={"sent-message " + (success ? "d-block" : "")}>Your message has been sent. Thank you!</div>
							</div>
							<div className={"text-center " + (loading ? "d-none" : "")}><button type="submit">Send Message</button></div>
						</form>
					</div>
				</div>
			</div>
        </ContactWraper>
	);
}

export default Contact;
