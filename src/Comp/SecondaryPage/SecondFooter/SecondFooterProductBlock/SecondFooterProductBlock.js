import "./SecondFooterProductBlock.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const SecondFooterProductBlock = ({BackLink, prop, index}) => {

	const valueCostIcon = (bool) =>{
		if(bool){
			return "costIconVisibility"
		}
		return "costIconUnVisibility"
	}
	
	const mapCostArr = prop.cost.map((obj)=>(
		<div>
			<img src={BackLink + "uploads/" + obj.img} alt="" className={valueCostIcon(obj.value)} />
		</div>
	))

	const mapTagArr = prop.tag.map((item)=>(
		<div className="ghostTeg">
			{item}
		</div>
	))

	const visibilityTag = (index) =>{
		if(index === 0){
			return(
				<div className='ghostTegBunch'>
					{mapTagArr}
				</div>
			)
		}
	}

	const mapImgArr = prop.squareImg.map((item , index) => (
		<SwiperSlide key={index}> 
			{visibilityTag(index)}
			<img src={item} alt="" className='second_footer_product_block_img'/>
		</SwiperSlide>
	))
	
	
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
					<a className="second_footer_product_block_info_title" href={"/"+prop._id}>
						{prop.title}
					</a>
					<div className="second_footer_product_block_info_subtitle">
						{prop.subTitle}
					</div>
				</div>
				<div className="second_footer_product_block_info_sell_row">
					<div className="second_footer_product_block_info_sell_block">
						<div className="second_footer_product_block_info_sell">Sale: {prop.sell}</div>
						<div className="second_footer_product_block_info_sell">Rent: {prop.rent}</div>
					</div>
					<div className="second_footer_product_block_info_cost_row">
						{mapCostArr}
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default SecondFooterProductBlock;