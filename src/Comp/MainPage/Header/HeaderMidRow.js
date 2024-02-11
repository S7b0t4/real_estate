import React from 'react'
import './HeaderMidRow.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const HeaderMidRow = ({objectList}) => {
	const mapFullObjectList = objectList.map((item, index)=>(
		<div className='header_mid_row_colum' key={index}>
			<div className="header_mid_row_colum_title">
				{item.objectTitle}
			</div>
			<div className="header_mid_row_colum_text">
				{item.objectText}
			</div>
			<div className="header_mid_row_colum_link">
				{item.objectSubText}
			</div>
		</div>
	))
	
	const mapMinimumObjectList = (
		<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{
					objectList.map((item, index)=>( 
						<SwiperSlide key={index}>
							<div className='header_mid_row_colum_big'>
								<div className="header_mid_row_colum_title_big">
									{item.objectTitle}
								</div>
								<div className="header_mid_row_colum_text_big">
									{item.objectText}
								</div>
									<div className="header_mid_row_colum_link_big">
									{item.objectSubText}
								</div>
							</div>
						</SwiperSlide>
					))
				}
			</Swiper>
	)
	return (
		<div className='header_mid_row'>
			<div className='map_minimum_object_list'>
				{mapMinimumObjectList}
			</div>
			<div className='map_full_object_list'>
				{mapFullObjectList}
			</div>
		</div>
	)
}
