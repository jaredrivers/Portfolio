import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

function About({ items }) {
	const [tech, setTech] = useState();

	useEffect(() => {
		// const order = items.sort(
		// 	(a, b) => a?.attributes.order - b?.attributes.order
		// );
		setTech(items);
	}, []);

	return (
		<div id='about' className='about h-screen w-screen p-2 '>
			<div className='h-full flex flex-col justify-center items-center space-y-5'>
				<p className='text-3xl 2xl:text-[3rem] text-center'>
					TECHNOLOGIES I&apos;VE USED
				</p>
				{tech && (
					<div className='grid justify-center items-center grid-cols-3 gap-x-10 gap-y-3 '>
						{tech.map((item) => (
							<div
								key={item._id}
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
