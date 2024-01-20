import './AdminPage.css' 
import Form from "./AdminForm/AdminForm"

const AdminPage = ({BackLink}) => {
	return (
		<div>
			<Form BackLink={BackLink} />
		</div>
	)
}
export default AdminPage