import cn from './interview.module.css';

// images and icons
import interview from '/assets/images/interview.png';
import toolImg1 from '/assets/images/tool1.png';
import toolImg2 from '/assets/images/tool2.png';
import toolImg3 from '/assets/images/tool3.png';
import toolImg4 from '/assets/images/tool4.png';
import toolImg5 from '/assets/images/tool5.png';
import toolImg6 from '/assets/images/tool6.png';
import toolImg7 from '/assets/images/tool7.png';

export const Interview = () => {
	return (
		<div id='interview' className={cn.container}>
			<div className={cn.interview_line}></div>

			<div className={cn.top_text}>
				<i className={cn.cherry}></i>:: Technical interviews ::
			</div>

			<h3 className={cn.title}>
				Interview like it’s <span>2024</span>
			</h3>

			<p className={cn.subtitle}>
				Ditch out of reach and out of touch interview questions about golf balls
				and 747s — and turn off your clunky screen share for good. Code, create,
				and collaborate with an IDE built to showcase real-world skills in a
				real-world environment.
			</p>
			<button className={cn.btn}>Learn more</button>

			<div className={cn.interview_box}>
				<div className={cn.tools_box}>
					<img
						data-aos='fade-up'
						className='alignnone wp-image-13072 size-full'
						src={toolImg1}
						alt="Icon illustrating code branching functionality in HackerRank's interview platform"
						width={73}
						height={74}
					/>{' '}
					<img
						data-aos='fade-up'
						className='alignnone wp-image-13073 size-full'
						src={toolImg2}
						alt='grayed out GitHub Atom logo'
						width={65}
						height={60}
					/>{' '}
					<img
						data-aos='fade-up'
						className='alignnone wp-image-13074 size-full'
						src={toolImg3}
						alt='Grayed out Zoom logo'
						width={90}
						height={89}
					/>{' '}
					<img
						data-aos='fade-up'
						className='alignnone wp-image-13075 size-full'
						src={toolImg4}
						alt='grayed out Microsoft Visual Studio logo'
						width={95}
						height={81}
					/>{' '}
					<img
						data-aos='fade-up'
						className='alignnone wp-image-13076 size-full'
						src={toolImg5}
						alt='Grayed out Google Docs logo'
						width={66}
						height={73}
					/>{' '}
					<img
						data-aos='fade-up'
						className='alignnone wp-image-13077 size-full'
						src={toolImg6}
						alt='grayed out Microsoft Whiteboard logo'
						width={80}
						height={73}
					/>{' '}
					<img
						data-aos='fade-up'
						className='alignnone wp-image-13078 size-full'
						src={toolImg7}
						alt="Icon illustrating the notepad functionality in HackerRank's interview platform"
						width={92}
						height={92}
					/>
				</div>
				<img src={interview} alt='interview' className={cn.interviewImg} />
			</div>
		</div>
	);
};
