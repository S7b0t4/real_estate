const TypeInput = ({ inputDescription, type, updateBooleanValue }) => {

	const mapType = type.map((i, index) => (
		<div className='type_input_row' key={index}>
			<div className='input_title'>{i.name}</div>
			<input className='input_checkbox' type="checkbox" onClick={() => { updateBooleanValue(i.name)}} />
		</div>
	))
	return (
		<div className='colum'>
			<div className='input_title'>{inputDescription}:</div>
			<div>
				{
					mapType
				}
			</div>
		</div>
	)
}
export default TypeInput