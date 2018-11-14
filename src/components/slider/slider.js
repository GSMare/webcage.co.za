import React from 'react';
import Slider from 'react-animated-slider';

import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';
import Cube1 from '../cube/cube1';
import Cube2 from '../cube2/cube2';
import Cube3 from '../cube3/cube3';

const content = [
	{
		Cube: <Cube1 />,
		title: 'User Interface / User Experience',
		description:
		'I design and develop cross-platform design concepts for the full potential of your website. My passion lies in crafting an emersive UX through beautiful UI & interactions.',
		button: 'Read More',
		image: '',
		user: 'UI/UX',
		userProfile: 'https://serv13.registerdomain.co.za:2083/cpsess5107406925/viewer/home%2fwebcagec%2fpublic_html%2fcgi-bin/Thumbsup.png',
	},
	{
		Cube: <Cube2 />,
		title: 'Tools & Skills',
		description:
		'',
		button: 'Discover',
		image: '',
		user: 'Web Development',
		userProfile: 'https://serv13.registerdomain.co.za:2083/cpsess5107406925/viewer/home%2fwebcagec%2fpublic_html%2fcgi-bin/Thumbsup.png',
	},
	{
		Cube: <Cube3 />,
		title: 'Mobile Applications',
		description:
		'I use React Native which is a Javascript framework to creact robust IOS and Android Apps. If you have a great idea for an App, please click on the "CONTACT ME" button and lets discuss your App`s possibilities.',
		button: 'CONTACT ME',
		image: '',
		user: 'App Development',
		userProfile: 'https://serv13.registerdomain.co.za:2083/cpsess5107406925/viewer/home%2fwebcagec%2fpublic_html%2fcgi-bin/Thumbsup.png',
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
							<p>{item.Cube}</p>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
						</div>
						<section>
							<img src={item.userProfile} alt={item.user} />
							<span>
								Posted by <strong>{item.user}</strong>
							</span>
						</section>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default AppSlider;
