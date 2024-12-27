import { profile } from "../../constants"
import { Navbar as BsNavbar } from "react-bootstrap"
import Logo from "../../assets/icons/logo-dark.svg?react"
import useTranslate from "../../hooks/useTranslate"

const Brand = () => {
	const { t } = useTranslate()

	return (
		<BsNavbar.Brand className="mb-lg-4 mx-lg-auto me-auto" href="/">
			<span className="h4 d-flex gap-2 align-items-center mb-0 fw-bold d-lg-none">
				<Logo className="icon-big" />
				<span>{t(profile.fullName)}</span>
			</span>
			<img
				loading="lazy"
				src={profile.avatar}
				alt={t(profile.fullName)}
				className="d-none d-lg-block rounded-circle"
				width={"216px"}
				height={"216px"}
			/>
		</BsNavbar.Brand>
	)
}

export default Brand
