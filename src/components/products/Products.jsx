import { useAutoAnimate } from '@formkit/auto-animate/react'
import React, { useState } from 'react'

import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import Product from './Product'
import styles from './Products.module.css'

const Products = () => {
	const [products, setProducts] = useState(ProductsData)
	const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

	const filter = type => {
		let filteredProducts = ProductsData.filter(product => product.type === type)
		setProducts(filteredProducts)
	}
	return (
		<div className={styles.container}>
			<img src={Plane} alt='Plane' />
			<h1 className={styles.products_title}>Our Feature Products</h1>
			<div className={styles.products}>
				<ul className={styles.products_menu}>
					<li onClick={() => setProducts(ProductsData)}>All</li>
					<li onClick={() => filter('skin care')}>Skin Care</li>
					<li onClick={() => filter('conditioner')}>Conditioner</li>
					<li onClick={() => filter('foundation')}>Foundation</li>
				</ul>

				<div className={styles.products_list} ref={parent}>
					{products.map((item, index) => {
						return (
							<Product
								name={item.name}
								details={item.details}
								price={item.price}
								img={item.img}
								type={item.type}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Products
