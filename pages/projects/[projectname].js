import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import ImageCarousel from "../../components/ImageCarousel";
import client from "../../client";

export const getServerSideProps = async (context) => {
	const pid = context.query.pid;

	const res = await client.fetch(
		`*[_type == "project" && slug.current == '/projects/pet-adoption?pid=${pid}']{
			URL,
			description,
			technologies[]-> {
				name,
				'url': icon.asset->url
			  },
			gallery-> {
				'data': images[].asset-> {
				'id': uploadId,
				'dimensions': metadata.dimensions{height, width},
				url,
				}
			}
		}`
	);

	const projectData = res[0];

	return { props: { projectData, pid } };
};

function ExampleProject({ projectData }) {
	const images = projectData.gallery.data;

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
					<Link scroll={false} href={projectData.URL.site}>
						<div className=' flex hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:text-theme-blue-dark'>
							<p className='m-auto text-xl'>VISIT SITE</p>
							<ChevronRightIcon className='w-7' />
						</div>
					</Link>
				</div>
				<div className='items-center justify-center w-full pt-5'>
					<ImageCarousel images={images}></ImageCarousel>
				</div>
				<div className='z-0 flex-col sm:grid sm:grid-cols-5 gap-10 px-10'>
					<div className='left flex flex-col col-span-2'>
						<p className='left-title self-center'>ABOUT THIS PROJECT:</p>
						<p className='description text-justify leading-loose'>
							{projectData.description}
						</p>
					</div>
					<div className='right flex flex-col col-span-3	'>
						<p className='right-title self-center '>TECHNOLOGIES</p>
						<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-auto'>
							{projectData.technologies.map((item) => (
								<div
									key={item.name}
									className='flex flex-col items-center justify-center m-3'>
									<p className='text-xs sm:text-sm text-center'>
										{item.name.toUpperCase()}
									</p>
									<img src={item.url} height={48} width={48} alt={item.name} />
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center space-x-10 grow'>
					<div className='py-2 px-4 transition ease-in-out delay-50 hover:scale-105 text-black'>
						<a href={projectData.URL.frontend}>
							<div className='flex flex-col justify-center items-center hover:text-theme-blue-dark'>
								<p>FRONTEND</p>
								<p>SOURCECODE</p>
							</div>
						</a>
					</div>

					<div className='py-2 px-4 transition ease-in-out delay-50 hover:scale-105 text-black'>
						<a href={projectData.URL.backend}>
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
