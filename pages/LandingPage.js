import React from "react";

function LandingPage() {
	return (
		<div className='bg-green-100 w-screen h-screen'>
			<div className='menu'>
				<ul>
					<li className='hover:text-red-400 cursor-pointer'>ABOUT</li>
					<li className='hover:text-red-400 cursor-pointer'>PROJECTS</li>
					<li className='hover:text-red-400 cursor-pointer'>BLOG</li>
					<li className='hover:text-red-400 cursor-pointer'>CONTACT ME</li>
				</ul>
			</div>
		</div>
	);
}

export default LandingPage;
