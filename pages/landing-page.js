import React from "react";
import Link from "next/link";
import NavigationMenu from "../components/NavigationMenu";

function LandingPage() {
	return (
		<div className='h-screen w-screen p-2 relative overflow-hidden'>
			<div className='flex'>
				<div className='w-auto flex flex-nowrap'>
					<NavigationMenu />
				</div>
				<div className='w-full grow'></div>
			</div>
		</div>
	);
}

export default LandingPage;
