import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const SecondMainCenter = ({ BackLink, squareImg, mainIMG }) => {

	const mapMainIMG = mainIMG.map((img, index) => (
		<SwiperSlide key={index}>
			<img className='imgSwapper' src={BackLink + "uploads/" + img} alt="" />
		</SwiperSlide>
	))

	const mapSquareImg = squareImg.map((img, index) => (
		<SwiperSlide key={index}>
			<img className='mini_imgSwapper' src={BackLink + "uploads/" + img} alt="" />
		</SwiperSlide>
	))

	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination]}
				navigation
				pagination={{ clickable: true }}
				spaceBetween={50}
				slidesPerView={1}
			>
				{mapMainIMG}
			</Swiper>
			<Swiper
				spaceBetween={10}
				slidesPerView={5}
			>
				{mapSquareImg}
			</Swiper>
		</div>
	)
}

export default SecondMainCenter