import React from "react";

function NewsItem({ desc, title, imageURL, newsUrl, sourceName }) {
	return (
		
		<div className="bg-[#F4F1E7] text-[#675941] rounded-2xl shadow-lg overflow-hidden border border-[#CD968B]">
			
			<img
				src={imageURL}
				alt="News"
				className="w-full h-48 object-cover"
			/>

			<div className="p-5">
				
				<h5 className="text-lg font-bold text-[#675941]">{title}</h5>

				<p className="text-sm text-[#AF8A7E] font-semibold text-right">
					- {sourceName}
				</p>

				<p className="text-sm mt-2 text-[#675941]">{desc}</p>

				<a
					href={newsUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 inline-block px-4 py-2 bg-[#EBA2A3] text-white rounded-lg hover:bg-[#CD968B] transition"
				>
					Read More
				</a>
			</div>
		</div>
	);
}

export default NewsItem;
