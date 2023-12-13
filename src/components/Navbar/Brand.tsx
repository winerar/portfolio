import { profile } from "../../constants"
import BsNavbar from "react-bootstrap/Navbar"

const Brand = () => {
	return (
		<BsNavbar.Brand className="mb-lg-4 mx-lg-auto" href="/">
			<span className="h4 fw-bold d-lg-none">{profile.firstName}</span>
			<img
				src={profile.avatar}
				alt={profile.fullName}
				className="d-none d-lg-block rounded-circle"
			/>
		</BsNavbar.Brand>
	)
}

export default Brand
