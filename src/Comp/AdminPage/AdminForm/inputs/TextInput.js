import { useRef } from 'react'

const TextInput = ({inputDescription, setInputValue}) => {
	const textInputRef = useRef()
	return ( 
		<input className='textInput' placeholder={inputDescription} ref={textInputRef} type="text" onChange={()=>setInputValue(textInputRef.current.value)}/>
	);
}
 
export default TextInput;