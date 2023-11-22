import React, { useState } from 'react'

import './AdminPage.css' 
import AdminValidForm from './AdminValidForm'
import Form from "./components/Form"

const AdminPage = ({BackLink}) => {
	const [value, setValue] = useState()
	const verefy = (i) => {
		setValue(i)
	}
	return (
		<div>
			{value || <AdminValidForm valid={(e)=>{verefy(e)}} />}
			{value && <Form BackLink={BackLink} />}
		</div>
	)
}
export default AdminPage