import React, { useEffect, useState } from "react";
import Link from "next/link";

function Blog({ content }) {
	const postHandler = (e) => {
		console.log(e.currentTarget.id);
	};
	return (
		<div
			id='blog'
			className='flex w-auto h-screen p-2 justify-center items-center'>
			<ul className='flex  sm:justify-center space-x-10 h-2/3 '>
				{content.map((post) => (
					<Link href={`/blog/${post.id}`}>
						<li
							key={post.id}
							id={post.id}
							onClick={postHandler}
							className='flex flex-col p-3 w-inherit sm:w-[45%] content-center border border-black rounded-md transition ease-in-out delay-50 hover:scale-105 shadow-md hover:cursor-pointer'>
							<h3 className='text-center font-bold '>
								{post.attributes.title}
							</h3>
							<h5>{post.attributes.description}</h5>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}

export default Blog;
