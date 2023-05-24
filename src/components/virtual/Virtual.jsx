import React from 'react'
import ReactCompareImage from 'react-compare-image'

import After from '../../assets/after.png'
import Before from '../../assets/before.png'
import Shade from '../../assets/shade.png'
import styles from './Virtual.module.css'

const Virtual = () => {
	return (
		<div className={styles.virtual}>
			<div className={styles.left_side}>
				<span>VIRTUAL TRY-ON</span>
				<span>NEVER BUY THE WRONG SHADE AGAIN!</span>
				<span>Try Now!</span>
				<img src={Shade} alt='Shade' />
			</div>
			<div className={styles.right_side}>
				<div className={styles.right_side__container}>
					<ReactCompareImage leftImage={Before} rightImage={After} />
				</div>
			</div>
		</div>
	)
}

export default Virtual
