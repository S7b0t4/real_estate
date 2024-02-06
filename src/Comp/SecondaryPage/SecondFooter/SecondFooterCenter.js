import About from "../SecondComp/About"
import CompItem from "../SecondComp/CompItem"
const SecondFooterCenter = ({BackLink, mainValue, itemInfo}) => {

	if(mainValue === "about"){	
		return ( 
			<About BackLink={BackLink} itemInfo={itemInfo}/>
		);
	}
	if(mainValue === "investment"){
		return ( 
			<CompItem itemInfo={itemInfo.compInfo[0]}/>
		);
	}
	if(mainValue === "uniqueness"){
		return ( 
			<CompItem itemInfo={itemInfo.compInfo[1]}/>
		);
	}
}
 
export default SecondFooterCenter;