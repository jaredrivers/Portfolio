import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

export async function getStaticPaths() {
	const url = process.env.STRAPI_API_URL;

	const postsRes = await axios.get(url + "/posts");
	const posts = postsRes.data.data;

	const paths = posts.map((post) => {
		return { params: { pid: post.id.toString() } };
	});

	return {
		paths,
		fallback: false,
	};
}

function Post({ post }) {
	return (
		<div className='flex flex-col p-10 items-center space-y-5 font-mono h-screen'>
			<h1 className='font-bold text-xl'>{post.attributes.title}</h1>
			<p>{post.attributes.content}</p>
		</div>
	);
}

export default Post;

export async function getStaticProps(context) {
	const id = context.params.pid;

	const url = process.env.STRAPI_API_URL;

	const postsRes = await axios.get(url + `/posts/${id}`);
	const post = postsRes.data.data;

	return {
		props: { post }, // will be passed to the page component as props
	};
}
