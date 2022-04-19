import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const getServerSideProps = async (context) => {
	const pid = context.query.pid;
	const url = process.env.STRAPI_API_URL;
	const pageRes = axios.get(`${url}/projects/${pid}`);
	const mediaRes = axios.get(`${url}/projects/${pid}?populate=*`);

	const res = await axios.all([pageRes, mediaRes]).then(
		axios.spread(function (res1, res2) {
			return res1, res2;
		})
	);
	const projectData = res.data.data;

	return { props: { projectData, url } };
};

function ExampleProject({ projectData, url }) {
	const router = useRouter();
	let images = projectData.attributes.samples.data;
	console.log(images);
	images = images.sort((a, b) => a.attributes.name - b.attributes.name);
	return (
		<div className='flex justify-center font-mono h-screen w-screen relative'>
			<div className='about-pagewrapper flex flex-col space-y-5 w-[80%] sm:w-[90%] sm:pt-15 h-full '>
				<Link scroll={false} href='/'>
					<ChevronLeftIcon className='w-7 top-5 left-1 absolute hover:cursor-pointer transition ease-in-out delay-50 hover:scale-110' />
				</Link>

				<div className='flex carousel border border-black rounded-md space-x-3 overflow-x-scroll overflow-y-hidden grow'>
					{images.map((img) => (
						<img
							key={img.id}
							src={url.replace("/api", "") + img.attributes.url}
							alt={img.attributes.alternativeText}
							className='rounded-md pointer-events-none self-center'
							width={img.attributes.width / 4}
							height={img.attributes.height / 4}
							layout='fixed'
						/>
					))}
				</div>
				<div className='flex justify-center flex-col'>
					<p>
						add links for twitter clone and other projects that just go to
						github repo
					</p>

					<p>Technologies used:</p>
					<p>Front end:</p>
					<p>Back end:</p>
				</div>
				<div>LINK TO GITHUB REPO</div>
			</div>
		</div>
	);
}

export default ExampleProject;
