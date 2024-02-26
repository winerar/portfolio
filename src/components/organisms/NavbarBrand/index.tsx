import RoundImage from "@atoms/RoundImage"
import { profile } from "@/constants"
import Logo from "@/assets/favicon.svg?react"

const NavbarBrand = () => {
	return (
		<a className="navbar-brand mb-lg-4 mx-lg-auto" href="/">
			<span className="h4 fw-bold d-lg-none">
				<Logo className="icon-big me-3" />
				<span>{profile.fullName}</span>
			</span>
			<RoundImage
				src={profile.avatar}
				alt={profile.fullName}
				width="216px"
				height="216px"
			/>
		</a>
	)
}

export default NavbarBrand
