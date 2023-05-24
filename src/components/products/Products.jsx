import React, { useState } from 'react'

import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import Product from './Product'
import styles from './Products.module.css'

const Products = () => {
	const [products, setProducts] = useState(ProductsData)
	return (
		<div className={styles.container}>
			<img src={Plane} alt='Plane' />
			<h1 className={styles.products_title}>Our Feature Products</h1>
			<div className={styles.products}>
				<ul className={styles.products_menu}>
					<li>All</li>
					<li>Skin Care</li>
					<li>Conditioner</li>
					<li>Foundation</li>
				</ul>

				<div className={styles.products_list}>
					{products.map((item, index) => {
						return <Product />
					})}
				</div>
			</div>
		</div>
	)
}

export default Products
