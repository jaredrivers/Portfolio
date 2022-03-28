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
				x: 1500,
			},
			{
				x: -500,
				scrollTrigger: {
					trigger: ".jared",
					start: "top center",
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
				x: 500,
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
				<div className='jared'>
					<span className='text-[30rem]'>JARED</span>
				</div>
				<div className='river'>
					<span className='text-[30rem]'>RIVER</span>
				</div>
			</div>
		</div>
	);
}

export default BackgroundName;
