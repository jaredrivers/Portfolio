import React from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import ImageCarousel from "../../components/ImageCarousel";
import qs from "querystring";

export const getServerSideProps = async (context) => {
	const pid = context.query.pid;
	const url = process.env.STRAPI_API_URL;

	const query = qs.stringify(
		{
			populate: "*",
		},

		{
			encodeValuesOnly: true,
		}
	);
	const query1 = qs.stringify(
		{
			populate: {
				technologies: {
					populate: "*",
				},
			},
		},

		{
			encodeValuesOnly: true,
		}
	);
	const res = await axios.get(`${url}/projects/${pid}?${query}`);
	const techRes = await axios.get(url + `/technologies?${query}`);

	const projectData = res.data.data;
	const techItems = techRes.data;

	return { props: { projectData, url, techItems } };
};

function ExampleProject({ projectData, url, techItems }) {
	let images = projectData.attributes.samples.data;
	images = images.sort((a, b) => a.attributes.name - b.attributes.name);
	let filteredItems = [];

	techItems.data.map((item1) =>
		projectData.attributes.technologies.data.map((item2) => {
			if (item1.id === item2.id) {
				filteredItems.push(item1);
			}
		})
	);

	return (
		<div className='flex justify-center font-mono h-screen w-screen relative'>
			<div className='about-pagewrapper flex flex-col space-y-5 w-full sm:pt-15 h-full'>
				<div className='flex justify-between w-full py-1 px-5 absolute top-4 z-10'>
					<Link scroll={false} href='/'>
						<div className='flex hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:text-theme-blue-dark'>
							<ChevronLeftIcon className='w-7' />
							<p className='m-auto text-xl'>BACK</p>
						</div>
					</Link>
					<Link scroll={false} href={`${projectData.attributes.siteUrl}`}>
						<div className=' flex hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:text-theme-blue-dark'>
							<p className='m-auto text-xl'>VISIT SITE</p>
							<ChevronRightIcon className='w-7' />
						</div>
					</Link>
				</div>
				<div className='items-center justify-center w-full pt-5'>
					<ImageCarousel images={images} url={url}></ImageCarousel>
				</div>
				<div className='z-0 flex-col sm:grid sm:grid-cols-5 gap-10 px-10'>
					<div className='left flex flex-col col-span-2'>
						<p className='left-title self-center'>ABOUT THIS PROJECT:</p>
						<p className='description text-justify leading-loose'>
							{projectData.attributes.description}
						</p>
					</div>
					<div className='right flex flex-col col-span-3	'>
						<p className='right-title self-center '>TECHNOLOGIES</p>
						<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-auto'>
							{filteredItems
								.sort((a, b) => a?.attributes.order - b?.attributes.order)
								.map((item) => (
									<div
										key={item.id}
										className='flex flex-col items-center justify-center m-3'>
										<p className='text-xs sm:text-sm text-center'>
											{item.attributes.label.toUpperCase()}
										</p>
										<img
											src={
												process.env.NODE_ENV === "development"
													? url.replace("/api", "") +
													  item.attributes.icon.data.attributes.url
													: item.attributes.icon.data.attributes.url
											}
											height={48}
											width={48}
											alt={item.attributes.label}
										/>
									</div>
								))}
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center space-x-10 grow'>
					<div className='py-2 px-4 transition ease-in-out delay-50 hover:scale-105 text-black'>
						<a href={projectData.attributes.frontendUrl}>
							<div className='flex flex-col justify-center items-center hover:text-theme-blue-dark'>
								<p>FRONTEND</p>
								<p>SOURCECODE</p>
							</div>
						</a>
					</div>

					<div className='py-2 px-4 transition ease-in-out delay-50 hover:scale-105 text-black'>
						<a href={projectData.attributes.backendUrl}>
							<div className='flex flex-col justify-center items-center hover:text-theme-blue-dark'>
								<p>BACKEND</p>
								<p>SOURCECODE</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExampleProject;
