import React from 'react'
import { HeaderTopRow } from './HeaderTopRow'
import { HeaderMidRow } from './HeaderMidRow'
import topImageTitle from '../../imgSource/topImageTitle.jpg'
import "./Header.css"

export const Header = () => {
	return (
		<div className="header_wrapper">
			<img src={topImageTitle} alt="" className="top_image_title" />
			<div className="header_filter">
				<div className="header_container">
					<HeaderTopRow />
					<HeaderMidRow />
				</div>
			</div>
		</div>
	)
}
