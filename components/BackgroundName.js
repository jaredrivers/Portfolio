import React, { useRef, useEffect } from "react";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import { ScrollTrigger } from "../node_modules/gsap/dist/ScrollTrigger.js";

function BackgroundName() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const element = useRef(null);

	useEffect(() => {
		const element = ref.current;
		gsap.from(element.querySelector(".jared"), {
			x: 1000,
			duration: 10,
			scrollTrigger: {
				trigger: ".jared",
				start: "top center",
				end: "bottom top",
				scrub: true,
			},
		});
	}, []);
	useEffect(() => {
		const element = ref.current;
		gsap.from(element.querySelector(".river"), {
			x: -1500,
			duration: 10,
			scrollTrigger: {
				trigger: ".river",
				start: "top center",
				end: "bottom top",
				scrub: true,
			},
		});
	}, []);

	return (
		<div ref={ref} className='w-fit h-fit'>
			<div className='absolute mt-[12%] flex flex-col opacity-10'>
				<span ref={element} className='jared text-[35rem]'>
					JARED
				</span>
				<span ref={element} className='river text-[35rem] '>
					RIVER
				</span>
			</div>
		</div>
	);
}

export default BackgroundName;
