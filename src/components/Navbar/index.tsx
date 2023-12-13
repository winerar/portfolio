import { Container } from "react-bootstrap"
import Brand from "./Brand"
import Contribution from "./Contribution"
import NavList from "./NavList"
import BsNavbar from "react-bootstrap/Navbar"

const Navbar: React.FC = (): JSX.Element => {
	return (
		<BsNavbar fixed="top" expand="lg" className="navbar-dark navbar-top">
			<Container className="container flex-lg-column">
				<Brand />
				<BsNavbar.Toggle
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					label="Toggle navigation"
					className="border-0"
				/>
				<BsNavbar.Collapse id="navbarNav">
					<NavList />
				</BsNavbar.Collapse>
			</Container>
			<Contribution />
		</BsNavbar>
	)
}

export default Navbar
