import React from 'react'
import { Header } from '../Header/Header'
import Middle from '../Middle/Middle'
import "./Wrapper.css"

export const Wrapper = ({ setTestArrForMapProductBlocks, getData, testArrForMapProductBlocks, BackLink }) => {
	return (
		<div>
			<Header BackLink={BackLink} />
			<Middle setTestArrForMapProductBlocks={setTestArrForMapProductBlocks} BackLink={BackLink} getData={getData} testArrForMapProductBlocks={testArrForMapProductBlocks} />
		</div>
	)
}
