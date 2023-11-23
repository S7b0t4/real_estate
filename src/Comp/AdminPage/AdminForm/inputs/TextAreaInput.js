import { useRef } from 'react'

const TextAreaInput = ({inputDescription, setInputValue}) => {
	const textInputRef = useRef()
	return ( 
		<div className='colum gap10'>
			<div className='input_title'>{inputDescription}:</div>
			<textarea className='input_text' rows="10" cols="50" ref={textInputRef} type="text" onChange={()=>setInputValue(textInputRef.current.value)}></textarea>
		</div>
	);
}
 
export default TextAreaInput;