import SecondMainTop from './SecondMainTop';
import SecondMainCenter from './SecondMainCenter';
import SecondMainBottom from './SecondMainBottom';

const SecondMain = ({BackLink, itemInfo}) => {
	return ( 
		<div>
			<SecondMainTop BackLink={BackLink} itemInfo={itemInfo}/>
			<SecondMainCenter BackLink={BackLink} squareImg={itemInfo.squareImg} mainIMG={itemInfo.mainIMG}/>
			<SecondMainBottom BackLink={BackLink} itemInfo={itemInfo}/>
		</div>
	);
}
 
export default SecondMain;