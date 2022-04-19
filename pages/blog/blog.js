import React, { useEffect, useState } from "react";
import Link from "next/link";

function Blog({ content }) {
	return (
		<div
			id='blog'
			className='flex flex-row items-center h-screen p-4 overflow-x-scroll overflow-hidden space-x-4 sm:space-x-10 sm:justify-center'>
			{content.map((post) => (
				<div className='min-w-[90%] sm:min-w-[45%] flex flex-col p-3 border border-black rounded-md transition ease-in-out delay-50 hover:scale-105 shadow-md hover:cursor-pointer h-2/3 scrollbar'>
					<Link href={`/blog/${post.id}`} key={post.id}>
						<div id={post.id} className='flex flex-col p-3 items-center'>
							<h3 className='text-center font-bold'>{post.attributes.title}</h3>
							<h5>{post.attributes.description}</h5>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export default Blog;
