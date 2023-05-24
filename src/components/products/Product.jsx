import React from 'react'

import styles from './Product.module.css'

const Product = ({ name, details, price, img, type }) => {
	return (
		<div className={styles.container_product}>
			<div className={styles.product}>
				<div className={styles.product_name}>
					<span>{name}</span>
					<span>{details}</span>
				</div>

				<span>{price} $</span>
				<button className={styles.btn_product}>Shop now</button>
			</div>
			<img src={img} alt='Product' className={styles.img_product} />
		</div>
	)
}

export default Product
