import SecondHeader from './SecondHeader/SecondHeader'
import SecondMain from './SecondMain/SecondMain'
import SecondFooter from "./SecondFooter/SecondFooter"
import "./SecondPage.css"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SecondPage = ({ BackLink }) => {
	const params = useParams()
	const [itemInfo, setItemInfo] = useState({ title: "", subTitle: "", sell: "", rent: "", squareImg: [], mainIMG: [], iconMapIMG: [], filterTag: ["All"], cost: [{ img: `${BackLink}src/iconBitCoin.svg`, value: false, }, { img: `${BackLink}src/iconTonCoin.svg`, value: false, }, { img: `${BackLink}src/iconEfirCoin.svg`, value: false, }, { img: `${BackLink}src/iconDHCoin.png`, value: false, }, { img: `${BackLink}src/iconBCoin.png`, value: false, },], infoNumbers: [], tag: ['', ''], textInfo: [], linkInfo: "#", compInfo: [{ title: "", text: "" }, { title: "", text: "" }], })

	const getData = async () => {
		await axios.get(BackLink + params.id)
			.then((res => {
				setItemInfo(res.data)
			}))
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<SecondHeader BackLink={BackLink} />
			<SecondMain BackLink={BackLink} itemInfo={itemInfo} />
			<SecondFooter itemInfo={itemInfo} BackLink={BackLink} />
		</div>
	)
}

export default SecondPage