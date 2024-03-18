import React from 'react';
import cn from './problem.module.css';

// icons and images
import { FaArrowRight } from 'react-icons/fa';
import { HiArrowLongRight } from 'react-icons/hi2';
import problemImg from '/assets/images/community.jpg';
import skill1Img from '/assets/images/binarytree1.png';
import skill2Img from '/assets/images/binarytree2.png';
import skill3Img from '/assets/images/binarytree3.png';
import { BeforeAfterComponent } from '../../../../components/BeforeAfter/BeforeAfter';

const Problem = () => {
	return (
		<section className={cn.problem_section}>
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
						<i className={`${cn.cherry} ${cn.before_title}`}></i>
						<h3 className={cn.skill_title}>Leave the binary tree behind.</h3>
					</div>

					<p className={cn.skill_subtitle}>
						Build coding questions using our library of dev-friendly content
						that challenges them to solve the problems they’d actually tackle on
						the job.
					</p>

					<button className={`${cn.btn} ${cn.btn_outline}`}>
						Start free trial
						<HiArrowLongRight size={18} />
					</button>
				</div>
				<div
					className={cn.practice_right}
					data-aos='fade-left'
					data-aos-delay='50'
				>
					<img
						src={skill1Img}
						alt='skill Img'
						className={cn.practice_right_img}
					/>
				</div>
			</div>

			<div className={cn.skills_box}>
				<div className={cn.practice_left}>
					<div className={cn.top_text}>
						<i className={`${cn.cherry} ${cn.before_title}`}></i>
						<h3 className={cn.skill_title}>
							Focus on what really matters: the code.
						</h3>
					</div>

					<p className={cn.skill_subtitle}>
						Build skills-based coding tests with tech problems a developer would
						encounter on the job — and hire the team behind your next big idea.
					</p>

					<button className={`${cn.btn} ${cn.btn_outline}`}>
						Request a demo
						<HiArrowLongRight size={18} />
					</button>
				</div>
				<div
					className={cn.practice_right}
					data-aos='fade-left'
					data-aos-delay='50'
				>
					<img
						src={skill2Img}
						alt='skill Img'
						className={cn.practice_right_img}
					/>
				</div>
			</div>

			<div className={cn.skills_box}>
				<div className={cn.practice_left}>
					<div className={cn.top_text}>
						<i className={`${cn.cherry} ${cn.before_title}`}></i>
						<h3 className={cn.skill_title}>Identify top contenders.</h3>
					</div>

					<p className={cn.skill_subtitle}>
						Identify top contenders and invite them to meet your team using
						data-driven decisions that help level the playing field for
						developers everywhere.
					</p>

					<button className={`${cn.btn} ${cn.btn_outline}`}>
						Learn more
						<HiArrowLongRight size={18} />
					</button>
				</div>
				<div
					className={cn.practice_right}
					data-aos='fade-left'
					data-aos-delay='50'
				>
					<img
						src={skill3Img}
						alt='skill Img'
						className={cn.practice_right_img}
					/>
				</div>
			</div>
		</div>
		</section>
	);
};

export default Problem;
