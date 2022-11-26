import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
	return (
		<div>
			<div className="text-[#fff] mb-[25px]">
				<h1 className="text-[1.5rem] font-semibold">Trend Topic</h1>
				<p className="text-base">Music Trens Today</p>
			</div>
			<div
				style={{ background: "transparent url('/images/hero.png') 0% 0% no-repeat" }}
				className="h-[398px] w-full pl-5 md:pl-20 flex items-center"
			>
				<div className="text-white">
					<h1 className="text-[18px] md:text-[2rem] font-medium">Sasha Sloan</h1>
					<h2 className="text-[2rem] md:text-[3rem] font-semibold">At Least I Look Cool</h2>

					<div className="flex items-center lg:gap-[24px] gap-3 mt-[70px]">
						<button className="btn-primary">
							<span>Play Now</span>
							<div className="w-[20px] h-[20px] rounded-full bg-[#E9003F] flex items-center justify-center">
								<FaPlay style={{ color: 'black', fontSize: "10px"}} />
							</div>
						</button>
						<button className="btn-primary">
							<span>Buy Now</span>
							<span className="text-[#E9003F]">$150</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
