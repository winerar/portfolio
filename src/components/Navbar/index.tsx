import Brand from "./Brand"
import Contribution from "./Contribution"
import NavList from "./NavList"
import NavbarToggler from "./NavbarToggler"

const Navbar: React.FC = (): JSX.Element => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
			<div className="container flex-lg-column">
				<Brand />
				<NavbarToggler />
				<div className="collapse navbar-collapse" id="navbarNav">
					<NavList />
				</div>
			</div>
			<Contribution />
		</nav>
	)
}

export default Navbar
