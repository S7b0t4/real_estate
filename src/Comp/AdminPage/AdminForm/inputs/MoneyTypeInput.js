const MoneyTypeInput = ({ BackLink, inputDescription, cost, handleChangeMoneyType }) => {

	const mapCost = cost.map((i, index) => (
		<div className='colum' key={index}>
			<img src={BackLink+"uploads/"+i.img} alt="img"/>
			<input type="checkbox" onClick={() => handleChangeMoneyType(index)}/>
		</div>
	))

	return ( 
		<div className='colum gap10'>
			<div className='input_title'>
				{inputDescription}:
			</div>
			<div className='gap10'>
				{mapCost}
			</div>
		</div>
	);
}
 
export default MoneyTypeInput;