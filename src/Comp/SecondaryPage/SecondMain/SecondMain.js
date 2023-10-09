import SecondMainTop from './SecondMainTop';
import SecondMainCenter from './SecondMainCenter';
import SecondMainBottom from './SecondMainBottom';

const SecondMain = ({itemInfo}) => {
	return ( 
		<div>
			<SecondMainTop itemInfo={itemInfo}/>
			<SecondMainCenter squareImg={itemInfo.squareImg} mainIMG={itemInfo.mainIMG}/>
			<SecondMainBottom itemInfo={itemInfo}/>
		</div>
	);
}
 
export default SecondMain;