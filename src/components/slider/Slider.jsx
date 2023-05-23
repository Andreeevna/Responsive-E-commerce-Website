import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { SliderProducts } from '../../data/products'
import styles from './Slider.module.css'

const Slider = () => {
	return (
		<div className={styles.s_container}>
			<Swiper
				slidesPerView={3}
				spaceBetween={40}
				slidesPerGroup={1}
				loop={true}
			>
				{SliderProducts.map((product, index) => {
					return (
						<SwiperSlide key={product.name + index}>
							<div className={styles.slide}>
								<div className={styles.name}>
									<span>{product.name}</span>
									<span>{product.detail}</span>
								</div>

								<span>{product.price} $</span>
								<button>Shop now</button>
							</div>
							<img
								src={product.img}
								alt='Product'
								className={styles.img_product}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Slider
