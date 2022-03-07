import React from "react";
import Footer from "../components/Footer";

function ContactMe() {
	const formInputs = [
		{ type: "name", name: "name", label: "NAME", classes: "" },
		{ type: "tel", name: "phone", label: "PHONE", classes: "" },
		{ type: "email", name: "email", label: "EMAIL", classes: "" },
		{ type: "textarea", name: "message", label: "MESSAGE", classes: "" },
	];
	return (
		<div id='contactMe' className='flex h-screen w-screen items-center'>
			<div className='mt-[5rem] md:mt-0 w-[90%] md:w-[70%] md:max-w-full mx-auto'>
				<p className='text-2xl mb-[5rem]'>LET'S KEEP IN TOUCH</p>
				<form className='space-y-4' action=''>
					{formInputs.map((item) => (
						<div key={item.name}>
							<label htmlFor='name'>{item.label}</label>
							{item.type == "textarea" ? (
								<textarea
									name={item.name}
									rows={5}
									className={`${item.classes} reqiured block outline:none text-xl bg-theme-beige w-full p-1 m-1 border-b-2 border-gray-400 focus:border-theme-red outline-none`}
								/>
							) : (
								<input
									type={item.type}
									name={item.name}
									className={`${item.classes} reqiured block outline:none text-xl bg-theme-beige w-full p-1 m-1 border-b-2 border-gray-400 focus:border-theme-red outline-none`}
								/>
							)}
						</div>
					))}
					<button className='flex p-2 bg-theme-blue-light rounded-lg items-center'>
						SEND
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
