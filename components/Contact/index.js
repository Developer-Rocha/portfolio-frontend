import React, { useState, useRef } from "react";
import { ContactWraper } from "./styles";
import { useMutation } from "@apollo/client";
import { POST_CONTACT } from "../../lib/apollo/mutations/postContact";

function Contact() {
	const el = useRef(null);
	const [height, setHeight] = useState();
	const [loading, setLoading ] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState([]);


	const submitContact = async (e) => {
		e.preventDefault();

		let portfolioHeight = el.current.offsetHeight;
		setHeight(portfolioHeight);

		if (e.target.email.value.length){
			console.log('você preencheu o campo que nao devia!!');
			setSuccess(true);
			return
		}
		setLoading(true);

		const arr = {
			"webform_id":"contact",
			"name": e.target.name.value,
			"email": e.target.emailclient.value,
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
					<h2>Contacto</h2>
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
								<a href="mailto:fabricio.lopesx@gmail.com">
									<p>fabricio.lopesx@gmail.com</p>
								</a>

							</div>

							<div className="phone">
								<i className="bi bi-phone"></i>
								<h4>Telemóvel:</h4>
								<a href="tel:+351 939 678 026">
									<p>+351 939 678 026</p>
								</a>

							</div>
						</div>
					</div>

					<div className="col-lg-8 mt-5 mt-lg-0" ref={el} style={{ minHeight: height }}>
						<div className={"loading " + (loading ? "d-flex" : "")}>Carregando</div>

						<form onSubmit={e => submitContact(e)} action="" method="post" role="form" className={"php-email-form " + (loading || success ? "d-none" : "")}>
							<div className="row">
								<div className="col-md-6 form-group">
									<input type="text" name="name" className="form-control" id="name" placeholder="Nome" required/>
								</div>
								<div className="col-md-6 form-group mt-3 mt-md-0">
									<input type="email" className="form-control" name="emailclient" id="emailclient" placeholder="Email" required/>
								</div>
							</div>
							<div className="form-group mt-3">
								<input type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" required/>
							</div>
							<div className="form-group mt-3">
								<textarea className="form-control" name="message" rows="5" placeholder="Mensagem" required></textarea>
							</div>

							<div className={"text-center " + (loading ? "d-none" : "")}><button type="submit">Enviar mensagem</button></div>
							<input type="email" className="d-none" name="email" id="email" placeholder="Your Email"/>
						</form>

						<div className="my-3">
							<div className={"error-message " + (error.length > 0 ? "d-block" : "")}>{ error.length > 0 ? error.map(item => <span>{item}</span>) : null }</div>
							<div className={"sent-message " + (success ? "d-block" : "")}>Sua mensagem foi enviada. Obrigado!</div>
						</div>
					</div>
				</div>
			</div>
        </ContactWraper>
	);
}

export default Contact;
