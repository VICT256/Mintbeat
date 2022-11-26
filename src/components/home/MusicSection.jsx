import React from 'react';
import { FaPlay, FaHeart } from 'react-icons/fa';

const music = [
	{
		music: 1,
		cover: '/images/older2.png',
	},
	{
		music: 2,
		cover: '/images/2.png',
	},
	{
		music: 3,
		cover: '/images/3.png',
	},
	{
		music: 4,
		cover: '/images/4.png',
	},
];

const recentlyPlayed = [
	{
		artist: 'Maroon 5',
		music: 'Memories',
		cover: '/images/5.png',
		duration: '3:45',
	},
	{
		artist: 'Maroon 5',
		music: 'Memories',
		cover: '/images/5.png',
		duration: '3:45',
	},
	{
		artist: 'Maroon 5',
		music: 'Memories',
		cover: '/images/5.png',
		duration: '3:45',
	},
	{
		artist: 'Maroon 5',
		music: 'Memories',
		cover: '/images/5.png',
		duration: '3:45',
	},
];

const MusicSection = () => {
	return (
		<div className="mt-[32px] grid grid-cols-12 gap-20">
			<div className="col-span-5">
				<div className="text-[#fff] mb-[25px]">
					<h1 className="text-[1.5rem] font-semibold">Made for you</h1>
					<p className="text-base">The more you listen for better recommendation</p>
				</div>
				<div className="grid grid-cols-2 gap-3 items-center justify-center">
					{music.map((item, i) => {
						return (
							<div key={i} className="w-full h-[211px] rounded-[13px]">
								<img src={item.cover} alt={item.music} className="w-full h-full" />
							</div>
						);
					})}
				</div>
			</div>
			<div className="col-span-7">
				<div className="text-[#fff] mb-[25px]">
					<h1 className="text-[1.5rem] font-semibold">Recently Played</h1>
					<p className="text-base">Only for you for better live music</p>
				</div>

				<div>
					{recentlyPlayed.map((item, i) => {
						return (
							<div
								key={i}
								style={{ boxShadow: '3px 3px 5px #00000026' }}
								className="bg-[#161616] max-w-[825px] p-[19px] rounded-[25px] flex items-center justify-between pr-20 relative mb-5"
							>
								<div className="flex items-center gap-5">
									<div className="w-[35px] h-[35px] bg-[#0000006c] rounded-full flex items-center justify-center ">
										<FaPlay style={{ color: 'white', fontSize: '10px' }} />
									</div>
									<div className="w-[67px] h-[67px] rounded-[11px] overflow-hidden">
										<img src={item.cover} alt={item.music} className="w-full h-full" />
									</div>
									<p className="flex flex-col gap-2 text-white">
										<span className="font-semibold text-[20px]">{item.artist}</span>
										<span className="text-base">{item.music}</span>
									</p>
								</div>
								<p className="text-base font-semibold">{item.duration}</p>
								<div className="flex items-center justify-center absolute top-[18px] right-5">
									<FaHeart style={{ color: 'white', fontSize: '12px' }} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MusicSection;
