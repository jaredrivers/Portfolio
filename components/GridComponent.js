import React from "react";

function GridComponent({ data, url }) {
	console.log(data);
	return (
		<div className='front grid grid-cols-2 items-center justify-center'>
			{data.map((item) => (
				<div
					key={item.id}
					className='flex flex-col items-center justify-center'>
					<p className='text-xs sm:text-sm text-center'>
						{item.attributes.label.toUpperCase()}
					</p>
					<img
						src={
							url.replace("/api", "") + item.attributes.icon.data.attributes.url
						}
						height={48}
						width={48}
						alt={item.attributes.label}
					/>
				</div>
			))}
		</div>
	);
}

export default GridComponent;
