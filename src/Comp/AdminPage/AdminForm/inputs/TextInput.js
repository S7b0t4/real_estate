import { useRef } from 'react'

const TextInput = ({inputDescription, setInputValue, type}) => {
	const textInputRef = useRef()
	return ( 
		<input className='input' placeholder={inputDescription} ref={textInputRef} type="type" onChange={()=>setInputValue(textInputRef.current.value)}/>
	);
}
 
export default TextInput;