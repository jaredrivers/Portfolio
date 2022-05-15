import React from "react";
import Image from "next/image";
import main from "../public/main.png";

export default function Home({}) {
	return (
		<div className='h-screen w-screen overflow-hidden flex justify-center items-center relative'>
			<div className='text-[3rem] absolute top-10 z-10 text-center'>
				Currently down for maintenance.
			</div>
			<Image
				src={main}
				className='pointer-events-none unselectable'
				width={2340}
				height={1140}
				priority
			/>
			<div className='text-[3rem]  absolute bottom-10 z-10'>
				Returning shortly!
			</div>
		</div>
	);
}
