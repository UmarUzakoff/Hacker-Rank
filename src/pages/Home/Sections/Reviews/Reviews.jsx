import React from 'react';
import Companies from '../../../../components/Companies/Companies';
import { ReviewCarousel } from '../../../../components/ReviewCarousel/ReviewCarousel';
import cn from './reviews.module.css';

const Reviews = () => {
	return (
		<div className='container'>
			<div className={cn.review_box}>
				<div className={cn.left}>
					<h3 className={cn.title}>
						Every company is a tech company.
						<span>We’re here to help ‘em all.</span>
					</h3>

					<p className={cn.subtitle}>
						More than 3,000 tech teams, representing all industries and from
						countries around the world, trust HackerRank to connect with
						developers and add cutting-edge skills to their teams.
					</p>

					<p className={cn.second_subtitle}>
						That includes 25% of the Fortune 100 — and that moonshot startup
						that just came out of stealth.
					</p>
				</div>
				<div className={cn.right}>
					<ReviewCarousel />
				</div>
			</div>

			<Companies />
		</div>
	);
};

export default Reviews;
