import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

function ProjectsCarousel({ data, url, techItems }) {
	console.log(data);
	return (
		<>
			{data && (
				<Swiper
					navigation={true}
					modules={[Mousewheel, Navigation]}
					slidesPerView={1.5}
					className='mySwiper h-[70%] z-0'
					spaceBetween={20}
					breakpoints={{
						"@0.00": {
							slidesPerView: 1,
							spaceBetween: 350,
							centeredSlides: false,
						},
						"@1.0052": {
							slidesPerView: 1.5,
							spaceBetween: 330,
							centeredSlides: false,
						},
						"@1.1": {
							slidesPerView: 1.5,
							spaceBetween: 200,
							centeredSlides: false,
						},
						"@1.30": {
							slidesPerView: 1.5,
							spaceBetween: 0,
							centeredSlides: true,
						},
						"@1.40": {
							slidesPerView: 1.5,
							spaceBetween: -50,
							centeredSlides: true,
						},
						"@1.50": {
							slidesPerView: 1.5,
							spaceBetween: -75,
							centeredSlides: true,
						},
						"@1.75": {
							slidesPerView: 2,
							spaceBetween: 0,
							centeredSlides: false,
						},
					}}>
					{data?.map((project) => (
						<SwiperSlide className='items-center flex z-0' key={project.id}>
							<div className='flex flex-col items-center text-right text-lg space-y-5'>
								<div className='w-full'>
									{project.attributes.title.split(" ").map((word) => (
										<h2
											className='hover:text-theme-blue-dark hover:cursor-default'
											key={word}>
											{word}
										</h2>
									))}
								</div>

								<div className='w-full'>
									<div className='hover:text-theme-blue-dark hover:cursor-pointer text-right ml-[3rem]'>
										<Link href={`${project.attributes.projectUrl}`}>
											<a>
												<h2 key='about'>ABOUT</h2>
												<h2 key='this'>THIS</h2>
												<h2 key='site'>SITE</h2>
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className='flex-col items-center hover:cursor-pointer transition ease-in-out delay-50 hover:scale-105 content-center'>
								<Image
									src={project.attributes.cover.data?.attributes.url}
									alt='Pet Project Link'
									layout='fixed'
									width={project.attributes.cover.data.attributes.width / 4}
									height={project.attributes.cover.data.attributes.height / 4}
									className='rounded-md'
									title='Pet Project Link'
									priority
								/>
							</div>
						</SwiperSlide>
					))}
					<SwiperSlide className='flex m-auto justify-center'>
						<div className='text-4xl flex flex-col items-center justify-center'>
							<p className='hover:text-theme-blue-dark hover:cursor-default'>
								MORE
							</p>
							<p className='hover:text-theme-blue-dark hover:cursor-default'>
								IN
							</p>
							<p className='hover:text-theme-blue-dark hover:cursor-default'>
								THE
							</p>
							<p className='hover:text-theme-blue-dark hover:cursor-default'>
								WORKS...
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			)}
		</>
	);
}

export default ProjectsCarousel;
