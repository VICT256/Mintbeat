import React, { useState, useEffect } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { playerOptions } from '../../utils';

const audioList = [
	{
		name: 'test',
		singer: 'Chizycodes',
		cover: '/images/3.png',
		musicSrc: '/audio/test.mp3',
	},
	{
		name: 'Bedtime Stories',
		singer: 'Jay Chou',
		cover: 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
		musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
	},
	{
		name: 'Dorost Nemisham',
		singer: 'Sirvan Khosravi',
		cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
		musicSrc:
			'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
	},
];

const MusicPlayer = () => {
	const [params, setParams] = useState({ ...playerOptions, audioLists: audioList });

	return (
		<div className="bg-[#141414]">
			<ReactJkMusicPlayer {...params} />
		</div>
	);
};

export default MusicPlayer;
