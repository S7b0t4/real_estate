import iconPosition from "../../imgSource/iconPosition.svg"

import CopyLink from "./Components/CopyLink"
import RequestInfo from "./Components/RequestInfo"

const SecondMainBottom = ({BackLink, itemInfo}) => {
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
		<div className='adoptive_second_main_bottom'>
			<div className='second_main_bottom_title'>{itemInfo.title}</div>
			<div className='second_main_bottom_subtitle'><img src={iconPosition} alt="" />{itemInfo.country}/{itemInfo.city}</div>
			<div className='second_main_bottom_big_row'>
				<div className="second_main_bottom_big_row_colum">
					<div className="second_main_bottom_big_row_colum_sale">Sale: {itemInfo.sell}</div>
					<div className="second_main_bottom_big_row_colum_rent">Rent: {itemInfo.rent}</div>
				</div>
				<div className="second_main_bottom_big_row_row">
					{
						mapCostArr
					}
				</div>
			</div>
			<RequestInfo itemInfo={itemInfo} BackLink={BackLink} adoptive={true}/>
			<CopyLink/>
		</div>
	);
}
 
export default SecondMainBottom;