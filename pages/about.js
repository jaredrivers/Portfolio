import React, { useEffect, useState } from "react";

function About({ items }) {
	const [tech, setTech] = useState();

	useEffect(() => {
		items = items.filter((item) => item.mainPage);
		const order = items.sort((a, b) => a?.order - b?.order);
		setTech(order);
	}, []);

	return (
		<div id='about' className='about flex w-screen justify-center px-5 '>
			<div className='h-full flex flex-col justify-center items-center space-y-5'>
				<p className='text-3xl 2xl:text-[3rem] text-center'>
					TECHNOLOGIES I&apos;VE USED
				</p>
				{tech && (
					<div className='grid justify-center items-center grid-cols-3 gap-x-10 gap-y-10 '>
						{tech.map((item) => (
							<div
								key={item.name}
								className='flex flex-col items-center justify-center 2xl:space-y-7 2xl:m-2'>
								<p className='text-xs sm:text-sm text-center 2xl:text-[1.7rem]'>
									{item.name.toUpperCase()}
								</p>
								<div className='min-h-[40px] min-w-[40px] h-[12%] w-[12%]'>
									<img
										src={item.icon.asset.url}
										className='object-contain w-[-webkit-fill-available]'
										alt={item.name}
									/>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default About;
