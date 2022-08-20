import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/react";
import Loader from "react-spinners/BarLoader";

function ContactMe({ email, user_id, service_id }) {
	const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
	`;

	const form = useRef();
	const [loading, setLoading] = useState(false);

	const formInputs = [
		{ type: "name", name: "name", label: "NAME", classes: "" },
		{ type: "tel", name: "phone", label: "PHONE", classes: "" },
		{ type: "email", name: "email", label: "EMAIL", classes: "" },
		{ type: "textarea", name: "message", label: "MESSAGE", classes: "" },
	];
	const initialForm = {
		name: "",
		phone: "",
		email: "",
		message: "",
		resume: false,
	};
	const [error, setError] = useState();
	const [contactForm, setContactForm] = useState(initialForm);

	const changeHandler = (e) => {
		if (error) {
			setError("");
		}
		if (e.currentTarget.name === "resume") {
			setContactForm({
				...contactForm,
				[e.currentTarget.name]: e.currentTarget.checked,
			});
		} else {
			setContactForm({
				...contactForm,
				[e.currentTarget.name]: e.currentTarget.value,
			});
		}
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		for (let [key, value] of Object.entries(contactForm)) {
			if (!value && key !== "resume") {
				setError("PLEASE COMPLETE THE FORM.");
			}
		}
		if (!error) {
			setLoading(true);
			try {
				await emailjs
					.sendForm(service_id, "template_h5v5yh5", form.current, user_id)
					.then(() => {
						toast.success("Email sent successfully!", {
							position: "top-center",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						});
						setContactForm(initialForm);
						setLoading(false);
					});
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		}
	};

	return (
		<div
			id='contact-me'
			className='flex w-full items-center justify-center p-16'>
			<div className='max-w-[1240px] w-full space-y-10'>
				<p className='text-2xl'>
					LET&apos;S KEEP IN TOUCH
				</p>
				<form
					className='space-y-4'
					ref={form}
					onSubmit={submitHandler}>
					{formInputs.map((item) => (
						<div key={item.name}>
							<label htmlFor={item.name}>{item.label}</label>
							{item.type == "textarea" ? (
								<textarea
									name={item.name}
									id={item.name}
									rows={5}
									className={`${item.classes} reqiured block outline:none text-lg bg-theme-beige w-full p-1 m-1 border-b-2 border-gray-400 focus:border-blue-600 outline-none font-sans`}
									onChange={changeHandler}
									value={contactForm[item.name]}
								/>
							) : (
								<input
									type={item.type}
									name={item.name}
									id={item.name}
									className={`${item.classes} reqiured block outline:none text-lg bg-theme-beige w-full p-1 m-1 border-b-2 border-gray-400 focus:border-blue-600 outline-none font-sans`}
									onChange={changeHandler}
									value={contactForm[item.name]}
								/>
							)}
						</div>
					))}
					<div className='flex items-center space-x-2'>
						<input
							type='checkbox'
							name='resume'
							id='resume'
							className='flex items-center mb-1 rounded-sm scale-125'
							onChange={changeHandler}
							value={contactForm.resume}
						/>
						<label htmlFor='resume' className='flex flex-nowrap items-center'>
							REQUEST COPY OF RESUME
						</label>
					</div>
					{error && (
						<div className='text-red-700'>
							<p>{error}</p>
						</div>
					)}
					{loading ? (
						<button className='w-30 h-10 flex p-2 rounded-lg items-center'>
							{<Loader loading={loading} color='#c5cbe3' css={override} />}
						</button>
					) : (
						<button className='flex p-2 bg-theme-blue-light rounded-lg items-center hover:bg-slate-300 disabled:opacity-50 '>
							SEND
						</button>
					)}
				</form>
			</div>
			<ToastContainer />
		</div>
	);
}

export default ContactMe;
