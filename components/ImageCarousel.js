import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function ImageCarousel({ images, url }) {
	return (
		<>
			<Swiper
				pagination={true}
				modules={[Mousewheel, Pagination]}
				slidesPerView={2}
				centeredSlides={true}
				className='mySwiper'
				mousewheel={true}
				loop={true}
				spaceBetween={0}
				breakpoints={{
					"@0.00": {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					"@0.75": {
						slidesPerView: 1.3,
						spaceBetween: 0,
					},

					"@1.20": {
						slidesPerView: 1.6,
						spaceBetween: -20,
					},
					"@1.50": {
						slidesPerView: 2,
						spaceBetween: -75,
					},
				}}>
				{images.map((img) => (
					<SwiperSlide key={img.id} className='py-5 md:py-2'>
						<img
							src={
								process.env.NODE_ENV === "development"
									? url.replace("/api", "") + img.attributes.url
									: img.attributes.url
							}
							alt={img.attributes.alternativeText}
							className='rounded-md pointer-events-none self-center'
							width={img.attributes.width / 4}
							height={img.attributes.height / 4}
							layout='fixed'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default ImageCarousel;
