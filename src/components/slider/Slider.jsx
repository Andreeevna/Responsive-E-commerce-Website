import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { SliderProducts } from '../../data/products'
import './Slider.css'

const Slider = () => {
	return (
		<div className='s_container'>
			<Swiper
				breakpoints={{
					856: {
						slidesPerView: 3,
					},
					520: {
						slidesPerView: 2,
					},
					0: {
						slidesPerView: 1,
					},
				}}
				className='my_swiper'
				modules={[Pagination, Navigation]}
				navigation={true}
				slidesPerView={3}
				spaceBetween={40}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
			>
				{SliderProducts.map((product, index) => {
					return (
						<SwiperSlide key={product.name + index}>
							<div className='slide'>
								<div className='name'>
									<span>{product.name}</span>
									<span>{product.detail}</span>
								</div>

								<span>{product.price} $</span>
								<button className='btn_product'>Shop now</button>
							</div>
							<img src={product.img} alt='Product' className='img_product' />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Slider
