import React from 'react'
import { Header } from '../Header/Header'
import Middle from '../Middle/Middle'
import "./Wrapper.css"

export const Wrapper = ({ testArrForMapProductBlocks, BackLink }) => {
	return (
		<div>
			<Header BackLink={BackLink} />
			<Middle BackLink={BackLink} testArrForMapProductBlocks={testArrForMapProductBlocks} />
		</div>
	)
}
