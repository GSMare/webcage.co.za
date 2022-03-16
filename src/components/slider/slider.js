import React from 'react';
import Slider from 'react-animated-slider';

import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';

import Cube1 from '../cube/cube1';
import Cube2 from '../cube2/cube2';
import Cube3 from '../cube3/cube3';

import Thumbsup from './media/Thumbsup.png';
import header_pp from './media/header_pp.png';

const content = [
	{
		Cube: <Cube1 />,
		title: 'User Interface / User Experience',
		description: [
		'I design and develop cross-platform design concepts for the full potential of your website. My passion lies in crafting an emersive UX through beautiful UI & interactions.'],
		button: 'Read More',
		image: '',
		heading: 'UI/UX',

	},
	{
		Cube: <Cube2 />,
		title: 'Tools & Skills',
		description: [
		'Clean and sustainable. All sites are coded with performance and functionality in mind, no matter if it`s a small business landing page or large web application, the best practices and tools are used.'],
		button: 'Discover',
		image: '',
		heading: 'Web Development',

	},
	{
		Cube: <Cube3 />,
		title: 'Mobile Applications',
		description: [
		'I use React Native which is a Javascript framework to creact robust IOS and Android Apps. If you have a great idea for an App, please click on the "CONTACT ME" button and lets discuss your App`s possibilities.'],
		button: 'CONTACT ME',
		image: '',
		heading: 'App Development',
	},
	{
		Cube: header_pp.png,
		title: 'About Me',
		description: [
		'I am a very curious person and also sure that is the reason why I started my career in IT because there is always samething new to learn.',
		'My career started as a technician in IT and Office Automation and slowly converted as a Web Developer over time as I got more and more interested and finally found something I love.' , 
		'Accept for as much as I enjoy spending time behind my computer, I enjoy the outdoors and endurance sport just as much.</p>'
],
		button: 'CONTACT ME',
		image: '',
		heading: 'Gerhard Mare',
	}
];

const AppSlider = props => {
	return (
		<div>
			<Slider className="slider-wrapper">
				{content.map((item, index) => (
					<div
						key={index}
						className="slider-content"
						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="inner">
							<h1>{item.title}</h1>
							<p>{item.Cube}</p>
							<p>{item.description[0]}</p>
							<p>{item.description[1]}</p>
							<p>{item.description[2]}</p>
						</div>

						<section>
							<img src={Thumbsup} alt={item.heading} />
							<span>
								<strong>{item.heading}</strong>
							</span>
						</section>

						<section style={{marginBottom: 0}}>
							<img src={Thumbsup} alt={item.heading} />
							
						</section>
						

					</div>
				))}
			</Slider>
		</div>
	);
}

export default AppSlider;
