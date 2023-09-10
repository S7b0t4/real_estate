import React from 'react'
import { Header } from '../Header/Header'
import Middle from '../Middle/Middle'
import "./Wrapper.css"

export const Wrapper = ({testArrForMapProductBlocks}) => {
	return (
		<div>
			<Header />
			<Middle testArrForMapProductBlocks={testArrForMapProductBlocks}/>
		</div>
	)
}
