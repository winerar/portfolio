import { navLinks } from "../../constants"
import NavItem from "./NavItem"

const NavList: React.FC = (): JSX.Element => {
	return (
		<ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
			{navLinks.map((item, index) => (
				<NavItem name={item.name} path={item.path} key={index} />
			))}
		</ul>
	)
}

export default NavList
