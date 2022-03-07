import React, { useEffect, useState } from "react";
import GridComponent from "../components/GridComponent";

function About({ items, url }) {
	const [tech, setTech] = useState();

	useEffect(() => {
		const front = items.filter((item) => item.attributes.type == "front");
		const back = items.filter((item) => item.attributes.type == "back");
		const neither = items.filter((item) => item.attributes.type == null);

		setTech([front, back, neither]);
	}, [items]);

	useEffect(() => {
		console.log(tech);
	}, [tech]);

	return (
		<div id='about' className='about h-screen w-screen p-2'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center h-full'>
				{tech && (
					<>
						{tech.map((item) => (
							<GridComponent data={item} url={url} />
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default About;
