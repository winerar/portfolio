import { Nav } from "react-bootstrap"
import { navLinks } from "../../constants"
import { useLocation } from "react-router-dom"

const NavList: React.FC = (): JSX.Element => {
	const location = useLocation()

	return (
		<Nav className="ms-auto flex-lg-column text-lg-center">
			{navLinks.map((item, index) => (
				<Nav.Link
					href={item.path}
					key={index}
					active={
						location.pathname.substring(1) === item.path.substring(1) ||
						(location.pathname === "/" && item.path === "#home")
					}
				>
					{item.name}
				</Nav.Link>
			))}
		</Nav>
	)
}

export default NavList
