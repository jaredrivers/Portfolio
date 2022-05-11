import React from "react";
import axios from "axios";
import { ChevronLeftIcon } from "@heroicons/react/outline";
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
	const res = await axios.get(`${url}/projects/${pid}?${query}`);

	const projectData = res.data.data;

	return { props: { projectData, url } };
};

function ExampleProject({ projectData, url }) {
	let images = projectData.attributes.samples.data;
	images = images.sort((a, b) => a.attributes.name - b.attributes.name);

	return (
		<div className='flex justify-center font-mono h-screen w-screen relative'>
			<div className='about-pagewrapper flex flex-col space-y-5 w-full sm:pt-15 h-full'>
				<Link scroll={false} href='/'>
					<div className='z-10 flex top-7 left-5 absolute hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:text-theme-blue-dark'>
						<ChevronLeftIcon className='w-7' />
						<p className='m-auto text-xl'>BACK</p>
					</div>
				</Link>
				<div className='items-center justify-center w-full pt-10 sm:pt-5 m-0'>
					<ImageCarousel images={images} url={url}></ImageCarousel>
				</div>

				<div className='z-0 flex-col sm:grid sm:grid-cols-2 gap-10 px-10'>
					<div className='left flex flex-col'>
						<p className='left-title self-center'>ABOUT THIS PROJECT:</p>
						<p className='description'>{projectData.attributes.description}</p>
					</div>
					<div className='right flex flex-col'>
						<p className='right-title self-center '>TECHNOLOGIES</p>
						<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-auto'>
							{projectData.attributes.technologies.data.map((item) => (
								<div key={item.id} className='flex items-center justify-center'>
									{item.attributes.label}
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
