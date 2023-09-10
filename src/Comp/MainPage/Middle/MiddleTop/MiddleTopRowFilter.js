import "./MiddleTopRowFilter.css"
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import iconMiniFilter from "../../../imgSource/iconMiniFilter.svg"
import iconFilter from "../../../imgSource/iconFilter.svg"
import All from "../../../imgSource/iconAll.svg"
import Seaside from "../../../imgSource/iconSeaside.svg"
import Mountains from "../../../imgSource/iconMountains.svg"
import Historical from "../../../imgSource/iconHistorical.svg"
import Residence from "../../../imgSource/iconResidence.svg"
import ForLife from "../../../imgSource/iconForLIfe.svg"
import BigCityLife from "../../../imgSource/iconBigCityLife.svg"
import Prestige from "../../../imgSource/iconPrestige.svg"
import Investment from "../../../imgSource/iconInvestment.svg"
import Commecial from "../../../imgSource/iconCommercial.svg"
import Designer from "../../../imgSource/iconDesigners.svg"

const filterArr = [
	{
		filterIcon: All,
		filterText: "All",
		filterTag: "All"
	},
	{
		filterIcon: Seaside,
		filterText: "Seaside",
		filterTag: "Seaside"
	},
	{
		filterIcon: Mountains,
		filterText: "Mountains",
		filterTag: "Mountains"
	},
	{
		filterIcon: Historical,
		filterText: "Historical",
		filterTag: "Historical"
	},
	{
		filterIcon: Residence,
		filterText: "Residence",
		filterTag: "Residence"
	},
	{
		filterIcon: ForLife,
		filterText: "For life",
		filterTag: "ForLife"
	},
	{
		filterIcon: BigCityLife,
		filterText: "Big city life",
		filterTag: "BigCityLife"
	},
	{
		filterIcon: Prestige,
		filterText: "Prestige",
		filterTag: "Prestige"
	},
	{
		filterIcon: Investment,
		filterText: "Investment",
		filterTag: "Investment"
	},
	{
		filterIcon: Commecial,
		filterText: "Commecial",
		filterTag: "Commecial" 
	},
	{
		filterIcon: Designer,
		filterText: "Designer’s",
		filterTag: "Designer"
	},
]

function MiddleTopRowFilter({onGetFilter, onChangeViewParam}) {

	const getFilterTag = (item) => {
		onGetFilter(item)
	}
	
	const mapFilterArrAdoptive = filterArr.map((item, index)=>(
		<SwiperSlide className="middle_top_row_filter_icon" onClick={()=>getFilterTag(item.filterTag)} key={index}>
			<img className="middle_top_row_filter_icon_img" src={item.filterIcon} alt="" />
			<div className="middle_top_row_filter_icon_text">{item.filterText}</div>
		</SwiperSlide>
	))
	
	const mapFilterArrSimpleMod = filterArr.map((item, index)=>(
		<div className="middle_top_row_filter_icon" onClick={()=>getFilterTag(item.filterTag)} key={index}>
			<img className="middle_top_row_filter_icon_img" src={item.filterIcon} alt="" />
			<div className="middle_top_row_filter_icon_text">{item.filterText}</div>
		</div>
	))

	return (
		<div className='middle_top_wrapper'>
			<div className='middle_top_block'>
				<div className='middle_top_row_filter'>
					<div className="middle_top_row_filter_main_icon" onClick={onChangeViewParam}>
						<img className="middle_top_row_filter_icon_img" src={iconFilter} alt="" />
						<div className="middle_top_row_filter_icon_text">Filter</div>
					</div>
					<div className="middle_top_row_filter_mini_icon" onClick={onChangeViewParam}>
						<img className="middle_top_row_mini_filter_icon_img" src={iconMiniFilter} alt="" />
						<div className="middle_top_row_mini_filter_icon_text">Filter</div>
					</div>
					<div className="middle_top_row_filter_border"></div>
					<div className="middle_top_row_filter_row_icon">
						{
							mapFilterArrSimpleMod
						}
					</div>
					<div className="middle_top_row_filter_row_option_icon">
						<div className="middle_top_row_filter_row_option_icon_btn">All</div>
						<div className="middle_top_row_filter_row_option_icon_btn">Sell</div>
						<div className="middle_top_row_filter_row_option_icon_btn">Rent</div>
					</div>
				</div>
				<div className='middle_top_row_filter_adoptive'>
					<Swiper
						modules={[FreeMode]}
      			spaceBetween={0}
      			slidesPerView={4}
    			>
						{
							mapFilterArrAdoptive
						}
    			</Swiper>
				</div>
			</div>
		</div>
	)
}

export default MiddleTopRowFilter
