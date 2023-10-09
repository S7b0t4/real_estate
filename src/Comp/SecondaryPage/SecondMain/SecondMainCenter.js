import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode'
import 'swiper/css';

const SecondMainCenter = ({ squareImg, mainIMG }) => { 

	const mapMainIMG = mainIMG.map((img, index)=>(
		<SwiperSlide key={index}>
			<img className='imgSwapper' src={img} alt="" />
		</SwiperSlide>
	))
	
	const mapSquareImg = squareImg.map((img, index)=>(
		<SwiperSlide key={index}>
			<img className='mini_imgSwapper' src={img} alt="" />
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
			modules={[FreeMode]}
			FreeMode
      spaceBetween={10}
      slidesPerView={8}
    >
      {mapSquareImg}
    </Swiper>
		</div>
	);
}
 
export default SecondMainCenter;