import SecondMainTop from './SecondMainTop';
import SecondMainCenter from './SecondMainCenter';
import SecondMainBottom from './SecondMainBottom';

const SecondMain = ({BackLink, itemInfo}) => {
	return ( 
		<div>
			<SecondMainTop BackLink={BackLink} itemInfo={itemInfo}/>
			<SecondMainCenter squareImg={itemInfo.squareImg} mainIMG={itemInfo.mainIMG}/>
			<SecondMainBottom itemInfo={itemInfo}/>
		</div>
	);
}
 
export default SecondMain;