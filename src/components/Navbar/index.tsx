import { Container } from "react-bootstrap"
import Brand from "./Brand"
import NavList from "./NavList"
import { Navbar as BsNavbar } from "react-bootstrap"
import { useState } from "react"
import Icon from "../../assets/icons/bars-solid.svg?react"
import Logo from "../../assets/icons/logo-dark.svg?react"

const Navbar: React.FC = () => {
	const [expanded, setExpanded] = useState(false)

	return (
		<BsNavbar
			fixed="top"
			expand="lg"
			className="navbar-dark full-width p-0 p-lg-3"
			expanded={expanded}
		>
			<Container className="flex-lg-column p-0">
				<Container className="d-flex p-2">
					<Brand />
					<BsNavbar.Toggle
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						label="Toggle navigation"
						className="border-0 px-1 d-flex d-lg-none flex-column justify-content-around"
						onClick={() => setExpanded(!expanded)}
					>
						<Icon className="navbar-toggler-icon" />
					</BsNavbar.Toggle>
				</Container>
				<BsNavbar.Collapse id="navbarNav" onClick={() => setExpanded(false)}>
					<NavList />
				</BsNavbar.Collapse>
				<div className="h4 fw-bold d-none d-lg-block">
					<Logo className="icon-big mx-2" />
				</div>
			</Container>
		</BsNavbar>
	)
}

export default Navbar
