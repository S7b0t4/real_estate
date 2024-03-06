import "./SecondFooterProductBlock.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


const SecondFooterProductBlock = ({ BackLink, prop, index }) => {

	const valueCostIcon = (bool) => {
		if (bool) {
			return "costIconVisibility"
		}
		return "costIconUnVisibility"
	}

	const mapCostArr = prop.cost.map((obj, index) => (
		<div key={index}>
			<img src={BackLink + "uploads/" + obj.img} alt="" className={valueCostIcon(obj.value)} />
		</div>
	))

	const mapImgArr = prop.squareImg.map((item, index) => (
		<SwiperSlide key={index}>
			<div className="second_footer_product_block_wrapper">
				<img src={BackLink + "uploads/" + item} alt="" className='second_footer_product_block_img' />
			</div>
		</SwiperSlide>
	))

	const sellType = (i) => {
		if(prop.type[i].value){
			if(i === 0){
				return (<div>{prop.sell}</div>)
			}
			if(i === 1){
				return (<div>{prop.rent}</div>)
			}
		}
		else{
			return (<div>n/a</div>)
		}
	}


	return (
		<div className='second_footer_product_block' key={index}>
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: false }}
				spaceBetween={10}
				slidesPerView={1}
				className='second_footer_product_block_img_swiper'
			>
				{mapImgArr}
			</Swiper>
			<div className="second_footer_product_block_info">
				<div className="second_footer_product_block_info_title_block">
					<a className="second_footer_product_block_info_title" href={"/real_estate/" + prop._id}>
						{prop.title}
					</a>
					<div className="second_footer_product_block_info_subtitle">
						{prop.country}/{prop.city}
					</div>
				</div>
				<div className="second_footer_product_block_info_sell_row">
					<div className="second_footer_product_block_info_sell_block">
						<div className="second_footer_product_block_info_sell">
							<div>
								Sale:
							</div>
							<div>
								{sellType(0)}
							</div>
						</div>
						<div className="second_footer_product_block_info_sell">
							<div>
							Rent:
							</div>
							<div>
								{sellType(1)}
							</div>
						</div>
					</div>
					<div className="second_footer_product_block_info_cost_row">
						{mapCostArr}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondFooterProductBlock