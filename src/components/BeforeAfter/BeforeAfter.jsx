import ReactCompareImage from 'react-compare-image';
import cn from './beforeAfter.module.css';

import Before from '/assets/images/left.jpg';
import After from '/assets/images/right.jpg';
import React, { useCallback, useState } from 'react';

import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider';

/** Keep a value within a range of 0-100. */
const toRange = (value) => Math.min(Math.max(value, 0), 100);

export const BeforeAfterComponent = () => {
	const [position, setPosition] = useState(25);
	const [hasFocus, setHasFocus] = useState(false);

	/** Change slider position on keyboard events. */
	const handleKeyDown = (ev) => {
		if (ev.key === 'ArrowRight') {
			setPosition((prev) => toRange(prev + 5));
		} else if (ev.key === 'ArrowLeft') {
			setPosition((prev) => toRange(prev - 5));
		}
	};

	/** Toggle the focus message. */
	const handleFocus = () => setHasFocus((prev) => !prev);

	/** Focus the target on click. */
	const handleClick = (ev) => {
		ev.persist();
		ev.target.focus();
	};

	const handlePositionChange = useCallback(
		(nextPosition) => {
			if (position !== nextPosition) setPosition(nextPosition);
		},
		[position]
	);

	return (
		<div>
        <div className={cn.comipreTextBox}>
        <div className={cn.top_text}>
				<i className={cn.cherry}></i>:: Coding practice ::
			</div>
            <h2 className={cn.title}>
            Join the movement.

				<span className={`${cn.title} ${cn.inner_title}`}>
                Screen on skills.
				</span>
			</h2>
        </div>
			
			<ReactCompareSlider
				tabIndex={0}
				onClick={handleClick}
				onFocusCapture={handleFocus}
				onBlurCapture={handleFocus}
				position={position}
				onKeyDown={handleKeyDown}
				itemOne={
					<ReactCompareSliderImage
						src={Before}
						className={cn.img}
						style={{ filter: 'grayscale(1)' }}
						alt='one'
					/>
				}
				itemTwo={
					<ReactCompareSliderImage src={After} className={cn.img} alt='two' />
				}
				onPositionChange={handlePositionChange}
				className={cn.contentWrapper}
			/>
		</div>
	);
};
