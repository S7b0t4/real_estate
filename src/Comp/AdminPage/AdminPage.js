import React, { useState } from 'react'

import './AdminPage.css' 
import AdminValidForm from './AdminValidForm/AdminValidForm'
import Form from "./AdminForm/AdminForm"

const AdminPage = ({BackLink}) => {
	const [value, setValue] = useState(true)
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