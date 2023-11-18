import React from 'react'
import { HeaderTopRow } from './HeaderTopRow'
import { HeaderMidRow } from './HeaderMidRow'
import topImageTitle from '../../imgSource/topImageTitle.jpg'
import "./Header.css"

export const Header = ({ BackLink }) => {
	return (
		<div className="header_wrapper">
			<img src={topImageTitle} alt="" className="top_image_title" />
			<div className="header_filter">
				<div className="header_container">
					<HeaderTopRow BackLink={BackLink} />
					<HeaderMidRow />
				</div>
			</div>
		</div>
	)
}
