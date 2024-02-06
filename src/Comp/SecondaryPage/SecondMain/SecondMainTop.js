import iconPosition from "../../imgSource/iconPosition.svg"
import iconArrayRight from "../../imgSource/iconArrayRight.svg"

import CopyLink from "./Components/CopyLink.js"
import RequestInfo from "./Components/RequestInfo.js";
import 'animate.css';

const SecondMainTop = ({BackLink, itemInfo}) => {

	const valueCostIcon = (bool) =>{
		if(bool){
			return "costIconVisibility"
		}
		return "costIconUnVisibility"
	}
	
	const mapCostArr = itemInfo.cost.map((obj, index)=>(
		<div key={index}>
			<img src={BackLink+"uploads/"+obj.img} alt="" className={valueCostIcon(obj.value)} />
		</div>
	))

	return ( 
		<div>
			<div className='second_main_top'>
				<div className="second_main_top_row">
					<a className='second_main_top_row_main_page' href="/">Main page</a>
					<div>/</div>
					<div>{itemInfo.title}</div>
				</div>
				<div className="second_main_top_big_row">
					<div className="second_main_top_big_row_colum">
						<div className='second_main_top_big_row_colum_title'>{itemInfo.title}</div>
						<div className='second_main_top_big_row_colum_subtitle'>
							<img src={iconPosition} alt="" />
							{itemInfo.subTitle}
						</div>
					</div>
					<div className="second_main_top_big_row_colum">
						{itemInfo.sell && <div className="second_main_top_big_row_colum_sale">Sale: {itemInfo.sell}</div>}
						{itemInfo.rent && <div className="second_main_top_big_row_colum_rent">Rent: {itemInfo.rent}</div>}
					</div>
					<div className="second_main_top_big_row_row">
						{
							mapCostArr
						}
					</div>
					<div className="second_main_top_big_row_button_row">
							<CopyLink/>
							<RequestInfo BackLink={BackLink} itemInfo={itemInfo}/>
					</div>
				</div>
			</div>
			<div className='adoptive'>
				<a className='row' href="/">
					<img src={iconArrayRight} alt="" />
					<div>Back to main page</div>
				</a>
			</div>
		</div>
	);
}
 
export default SecondMainTop;