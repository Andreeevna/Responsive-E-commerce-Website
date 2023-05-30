import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import Hero from '../../assets/testimonialHero.png'
import { TestimonialsData } from '../../data/testimonials'
import styles from './Testimonials.module.css'

const Testimonials = () => {
	return (
		<div className={styles.testimonials}>
			<div className={styles.wrapper}>
				<div className={styles.details}>
					<span>TOP RATED</span>
					<span>
						SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
						REJOICED
					</span>
				</div>

				<img src={Hero} alt='Hero' />

				<div className={styles.details}>
					<span>100K</span>
					<span>HAPPY CUSTOMERS WITH US</span>
				</div>
			</div>

			<div className={styles.testimonials_title}>REVIEWS</div>

			<div className={styles.carousel}>
				<Swiper
					slidesPerView={3}
					slidesPerGroup={1}
					spaceBetween={20}
					breakpoints={{
						1050: {
							slidesPerView: 3,
						},
						856: {
							slidesPerView: 3,
						},
						640: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					}}
					className={styles.t_slider}
				>
					{TestimonialsData.map((t, index) => {
						return (
							<SwiperSlide key={index}>
								<div className={styles.testimonial}>
									<img src={t.image} />
									<span>{t.comment}</span>
									<hr />
									<span>{t.name}</span>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default Testimonials
