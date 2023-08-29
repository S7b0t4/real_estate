import React from 'react'
import './HeaderMidRow.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const objectList = [
	{
		objectTitle: "About",
		objectText: "The project allows you to purchase unique objects and items. You can pay for all properties using cryptocurrency payments. We make it simple quickly and secure for you",
	},
	{
		objectTitle: "Premium",
		objectText: "After buying a property through our service you get private access to a privileged club with the opportunity to purchase the rarely gems or art objects",
	},
	{
		objectTitle: "Residence permit",
		objectText: "We help in getting the residence permit of any countries through the purchase of real estate on our service",
	},
	{
		objectTitle: "Make an enquire",
		objectText: "You can make an request for any question or suggestion. Our experts will contact you asap",
		objectSubText: "get in touch"
	},
]

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
				objectList.map((item)=>( 
					<SwiperSlide>
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


export const HeaderMidRow = () => {
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
