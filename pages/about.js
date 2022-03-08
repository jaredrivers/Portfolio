import React, { useEffect, useState } from "react";

function About({ items, url }) {
	const [tech, setTech] = useState();

	useEffect(() => {
		const front = items.filter((item) => item.attributes.type == "front");
		const back = items.filter((item) => item.attributes.type == "back");
		const neither = items.filter((item) => item.attributes.type == null);

		setTech([front, back, neither]);
	}, [items]);

	useEffect(() => {
		// tech && console.log(tech);
	}, [tech]);

	return (
		<div id='about' className='about h-screen w-screen p-2'>
			<div className='h-full flex flex-col justify-center items-center'>
				<p className='text-3xl text-center'>TECHNOLOGIES I'VE USED</p>

				{tech && (
					<div className='grid p-auto m-7 justify-center items-center grid-cols-3 max-h-sm:max-w-[70%] sm:max-h-[60%] sm:grid-cols-4'>
						{tech.map((section) =>
							section.map((item) => (
								<div
									key={item.id}
									className='h-auto flex flex-col items-center justify-center m-3'>
									<p className='text-xs sm:text-sm text-center'>
										{item.attributes.label.toUpperCase()}
									</p>
									<img
										src={
											url.replace("/api", "") +
											item.attributes.icon.data.attributes.url
										}
										height={48}
										width={48}
										alt={item.attributes.label}
									/>
								</div>
							))
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default About;
