const FilterInput = ({inputDescription, handleButtonClick, form}) => {

	const filterTags = ["Seaside","Mountains","Historical","Residence","ForLife","BigCityLife","Prestige","Investment","Commecial","Designer"]

	const mapFilterTags = filterTags.map((i, index) => (
		<button className='input_text' key={index} onClick={()=>handleButtonClick(i)}>
			{i}
		</button>
	))

	const mapFilterTag = form.filterTag.map((i, index) => (
		<div className='input_text' key={index}>
			{i}
		</div>
	))

	return ( 
		<div className='colum'>
			<div className='colum'>
				<div className='input_title'>
					{inputDescription}:
				</div>
				<div className='row gap10'>
					{mapFilterTag}
				</div>
			</div>
			<div className='gap10'>
				{mapFilterTags}
			</div>
		</div>
	);
}
 
export default FilterInput;