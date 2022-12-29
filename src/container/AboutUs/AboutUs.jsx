import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div className='app__aboutus app__bg flex__center section__padding' id='about'>
		<div className="app__aboutus-overlay flex-center">
			<img src={images.G} alt="g letter" />
		</div>

		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={images.spoon} alt="about spoon" className='spoon__img' />
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas dolore quidem ea error voluptate. Quam totam corporis aliquam sunt?
				</p>
				<button type='button' className='custom__button'>Know More</button>
			</div>

			<div className="app__aboutus-content_knife flex-center">
				<img src={images.knife} alt="about_knife" />
			</div>

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img src={images.spoon} alt="about spoon" className='spoon__img' />
				<p className="p__opensans">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, praesentium culpa corrupti iure assumenda eligendi numquam sequi laudantium fuga cupiditate.
				</p>
				<button type='button' className='custom__button'>Know More</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
