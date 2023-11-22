import React, { useRef, useState } from 'react'

import './AdminValidForm.css'

const AdminValidForm = ({valid}) => {
	const login = useRef()
	const password = useRef()
	const [message, setMessage] = useState()
	const verify = () => {
		setMessage(<div></div>)
		if (login.current.value === "qwerty" && password.current.value === "12345") {
			setMessage(
				<div className='admin_valid_form_message alert'>
					All, it's ok
				</div>
			)
			valid(true)
		}
		else {
			setMessage(
				<div className='admin_valid_form_message err'>
					Mistake in login or password
				</div>
			)
		}
	}
	const verefyWithoutButton = (event) => {
		if (event.keyCode === 13) {
			verify()
		}
	}

	
	return (
		<div className='admin_valid_form_wrapper'>
			<div className='admin_valid_form_block'>
				<div className='admin_valid_form_title'>Log in</div>
				<input ref={login} type="text" className='admin_valid_form_input' placeholder='login' onKeyDown={(e) => verefyWithoutButton(e)} />
				<input type="password" ref={password} type="text" className='admin_valid_form_input' placeholder='password' onKeyDown={(e) => verefyWithoutButton(e)} />
				<button className='admin_valid_form_button' onClick={verify}>Apply</button>
				<div>
					{message}
				</div>
			</div>
		</div>
	)
}
export default AdminValidForm