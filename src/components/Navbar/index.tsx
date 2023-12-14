import { Container } from "react-bootstrap"
import Brand from "./Brand"
import Contribution from "./Contribution"
import NavList from "./NavList"
import BsNavbar from "react-bootstrap/Navbar"
import { useState } from "react"

const Navbar: React.FC = (): JSX.Element => {
	const [expanded, setExpanded] = useState(false)

	return (
		<BsNavbar
			fixed="top"
			expand="lg"
			className="navbar-dark full-width"
			expanded={expanded}
		>
			<Container className="container flex-lg-column">
				<Brand />
				<BsNavbar.Toggle
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					label="Toggle navigation"
					className="border-0"
					onClick={() => setExpanded(!expanded)}
				/>
				<BsNavbar.Collapse id="navbarNav" onClick={() => setExpanded(false)}>
					<NavList />
				</BsNavbar.Collapse>
			</Container>
			<Contribution />
		</BsNavbar>
	)
}

export default Navbar
