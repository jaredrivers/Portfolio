import React from "react";

function Blog({ content }) {
	return (
		<div id='blog' className='h-screen w-screen p-2 overflow-hidden'>
			<div className='flex'>
				{content.map((post) => (
					<div key={post.id} className='m-1 p-2'>
						<h3>{post.attributes.title}</h3>
						<h5>{post.attributes.description}</h5>
						<p>{post.attributes.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Blog;
