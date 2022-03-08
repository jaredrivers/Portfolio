import React, { useRef, useEffect } from "react";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import { ScrollTrigger } from "../node_modules/gsap/dist/ScrollTrigger.js";
import jared_cap from "../public/jared_cap.svg";
import jared_lower from "../public/jared_lower.svg";
import river_cap from "../public/river_cap.svg";
import river_lower from "../public/river_lower.svg";
import Image from "next/image";

function BackgroundName() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const element = useRef(null);

	useEffect(() => {
		const element = ref.current;
		gsap.fromTo(
			element.querySelector(".jared"),
			{
				x: 3000,
				y: 10,
			},
			{
				x: -50,
				scrollTrigger: {
					trigger: ".jared",
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			}
		);
	}, []);
	useEffect(() => {
		const element = ref.current;
		gsap.fromTo(
			element.querySelector(".river"),
			{
				x: -1500,
			},
			{
				x: 100,

				scrollTrigger: {
					trigger: ".river",
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div ref={ref} className='w-fit h-fit '>
			<div className='absolute pt-[12%] flex flex-col opacity-10'>
				<div>
					<Image
						src={jared_cap}
						className='jared m-0 p-0 max-w-none max-h-100 pointer-events-none '
					/>
				</div>
				<div className=''>
					<Image
						src={river_cap}
						className='river m-0 p-0 max-w-none max-h-100 pointer-events-none '
					/>
				</div>
			</div>
		</div>
	);
}

export default BackgroundName;
