import React from 'react';
import cn from './problem.module.css';

// icons and images
import { FaArrowRight } from 'react-icons/fa';
import problemImg from '/assets/images/community.jpg';
import { BeforeAfterComponent } from '../../../../components/BeforeAfter/BeforeAfter';

const Problem = () => {
	return (
		<div className={cn.container}>
			<h2 className={cn.title}>
				It’s not a pipeline problem.
				<span className={`${cn.title} ${cn.inner_title}`}>
					It’s a spotlight problem.
				</span>
			</h2>
			<p className={cn.subtitle}>
				Tech hiring needs a reset. From prepping for jobs and practicing coding
				to running a world-class technical interview, give developers the tools
				they need to showcase their skills, passion, and potential.
			</p>

			<div className={cn.link_box}>
				<a href='#Prep' className={cn.link}>
					Prep
				</a>
				<a href='#Screen' className={cn.link}>
					Screen
				</a>
				<a href='#Interview' className={cn.link}>
					Prep
				</a>
			</div>
			<div className={cn.line}></div>
			<div className={cn.practice_box}>
				<div className={cn.practice_left}>
					<div className={cn.top_text}>
						<i className={cn.cherry}></i>:: Coding practice ::
					</div>
					<h3 className={cn.practice_title}>Explore and expand your skills.</h3>
					<p className={cn.practice_subtitle}>
						Every idea has a first line of code. Prep for jobs and sharpen your
						skills alongside a global community of developers. Access the
						content you need to develop new skills – and land the job you’ve
						dreamed of.
					</p>

					<button className={cn.btn}>
						Sign up and practice
						<FaArrowRight />
					</button>
				</div>
				<div className={cn.practice_right}>
					<img
						src={problemImg}
						alt='problemImg'
						className={cn.practice_right_img}
					/>
				</div>
			</div>
			<BeforeAfterComponent />

{/* Skill boxes  */}


<div className={cn.skills_box}>
				<div className={cn.practice_left}>
					<div className={cn.top_text}>
						<i className={cn.cherry}></i>
						<h3 className={cn.skill_title}>Explore and expand your skills.</h3>
					</div>
					
					<p className={cn.practice_subtitle}>
						Every idea has a first line of code. Prep for jobs and sharpen your
						skills alongside a global community of developers. Access the
						content you need to develop new skills – and land the job you’ve
						dreamed of.
					</p>

					<button className={cn.btn}>
						Sign up and practice
						<FaArrowRight />
					</button>
				</div>
				<div className={cn.practice_right}>
					<img
						src={problemImg}
						alt='problemImg'
						className={cn.practice_right_img}
					/>
				</div>
			</div>

		</div>
	);
};

export default Problem;
