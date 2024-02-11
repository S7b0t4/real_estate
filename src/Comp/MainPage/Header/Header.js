import React, { useState } from 'react'
import { HeaderTopRow } from './HeaderTopRow'
import { HeaderMidRow } from './HeaderMidRow'
import topImageTitle from '../../imgSource/topImageTitle.jpg'
import "./Header.css"

const arrLanValue = [
	{
		valueText: "Eng",
		valueIMG: "uploads/iconENG.svg",
		objectList:[
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
			},
		]
	},
	{
		valueText: "Ru",
		valueIMG: "uploads/iconRus.svg",
		objectList:[
			{
				objectTitle: "О проекте",
				objectText: "Проект позволяет вам приобретать уникальные объекты и предметы быта. Вы можете оплачивать все объекты недвижимости с помощью криптовалютных платежей. Мы делаем это просто, быстро и безопасно для вас",
			},
			{
				objectTitle: "Премиум",
				objectText: "После покупки недвижимости через наш сервис вы получаете частный доступ в привилегированный клуб с возможностью приобретения редких драгоценных камней или предметов искусства",
			},
			{
				objectTitle: "Вид на жительство",
				objectText: "Мы помогаем в получении вида на жительство в любых странах путем покупки недвижимости на нашем сервисе",
			},
			{
				objectTitle: "Сделать запрос",
				objectText: "Вы можете сделать запрос по любому вопросу или предложению. Наши специалисты свяжутся с вами как можно скорее",
			},
		]
	},
]

export const Header = ({ BackLink }) => {

	const [lanMainValue, setLanMainValue] = useState(arrLanValue[0])

	return (
		<div className="header_wrapper">
			<img src={topImageTitle} alt="" className="top_image_title" />
			<div className="header_filter">
				<div className="header_container">
					<HeaderTopRow BackLink={BackLink} arrLanValue={arrLanValue} setLanMainValue={setLanMainValue} lanMainValue={lanMainValue}/>
					<HeaderMidRow objectList={lanMainValue.objectList}/>
				</div>
			</div>
		</div>
	)
}
