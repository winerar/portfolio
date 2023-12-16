import { profile } from "../../constants"
import BsNavbar from "react-bootstrap/Navbar"
import Logo from "../../assets/favicon.svg?react"

const Brand = () => {
	return (
		<BsNavbar.Brand className="mb-lg-4 mx-lg-auto" href="/portfolio">
			<span className="h4 fw-bold d-lg-none">
				<Logo className="icon-big me-3" />
				<span>{profile.fullName}</span>
			</span>
			<img
				loading="lazy"
				src={profile.avatar}
				alt={profile.fullName}
				className="d-none d-lg-block rounded-circle"
			/>
		</BsNavbar.Brand>
	)
}

export default Brand
