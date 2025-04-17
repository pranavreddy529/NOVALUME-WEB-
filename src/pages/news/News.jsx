import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function News() {
	const [articles, setArticles] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [expanded, setExpanded] = useState(false);

	const dummyArticles = [
		{
			title: "Top 5 Tips to Save Energy at Home",
			desc: "Simple habits can lead to big savings on your energy bills.",
			imageURL: "https://images.unsplash.com/photo-1581090700227-1e8e401ba9d8?auto=format&fit=crop&w=800&q=80",
			sourceName: "Green Living",
			fullContent: `1. Switch to LED lights—they use up to 80% less energy.
2. Unplug devices when not in use to avoid phantom loads.
3. Wash clothes in cold water and line-dry when possible.
4. Set your thermostat to an efficient temperature and use fans.
5. Seal gaps around doors and windows to reduce heating/cooling loss.`
		},
		{
			title: "Smart Thermostats Can Cut Your Energy Bill",
			desc: "Learn how programmable thermostats adjust temperatures for savings.",
			imageURL: "https://images.unsplash.com/photo-1602526212872-6772c1e842f9?auto=format&fit=crop&w=800&q=80",
			sourceName: "Eco Tech News",
			fullContent: `Smart thermostats can learn your habits and adjust heating and cooling to save energy. They allow remote control, scheduling, and insights into usage. Studies show they can reduce energy bills by up to 15% annually.`
		},
		{
			title: "The Power of Natural Light in Energy Saving",
			desc: "Maximizing natural light can reduce the need for artificial lighting.",
			imageURL: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
			sourceName: "Bright Ideas",
			fullContent: `By opening curtains and using light-colored walls, you can make the most of natural light. This reduces the need for electric lighting during the day and creates a healthier home environment.`
		}
	];

	useEffect(() => {
		setArticles(dummyArticles);
	}, []);

	const prevArticle = () => {
		setExpanded(false);
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
	};

	const nextArticle = () => {
		setExpanded(false);
		setCurrentIndex((prevIndex) => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1));
	};

	const { title, desc, imageURL, fullContent, sourceName } = articles[currentIndex] || {};

	return (
		<motion.div
			className="bg-[#F4F1E7] min-h-screen flex items-center justify-center px-6"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="relative w-full max-w-4xl bg-white text-[#675941] rounded-2xl shadow-lg overflow-hidden border border-[#CD968B]">
				{/* Image Container with Overlayed Buttons */}
				<div className="relative">
					<img src={imageURL} alt="News" className="w-full h-96 object-cover" />

					{/* Navigation Buttons */}
					<button
						onClick={prevArticle}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full shadow-lg hover:bg-black/80 transition"
					>
						<FaArrowLeft className="text-white text-2xl" />
					</button>
					<button
						onClick={nextArticle}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full shadow-lg hover:bg-black/80 transition"
					>
						<FaArrowRight className="text-white text-2xl" />
					</button>
				</div>

				{/* News Content */}
				<div className="p-6 text-center">
					<h5 className="text-2xl font-bold">{title}</h5>
					<p className="text-md text-[#AF8A7E] font-semibold text-right">- {sourceName}</p>
					<p className="text-lg mt-4">{desc}</p>

					{expanded ? (
						<p className="whitespace-pre-line text-left mt-4 text-[#4a3f38]">{fullContent}</p>
					) : (
						<button
							onClick={() => setExpanded(true)}
							className="mt-6 inline-block px-6 py-3 bg-[#EBA2A3] text-white rounded-lg hover:bg-[#CD968B] transition"
						>
							Read More
						</button>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export default News;
