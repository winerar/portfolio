import { Nav } from "react-bootstrap"
import { navLinks } from "../../constants"
import { useLocation } from "react-router-dom"

const NavList: React.FC = () => {
	const location = useLocation()

	const isActive = (link: string): boolean => {
		return (
			location.pathname.substring(1) === link.substring(1) ||
			(location.pathname === "/" && link === "#home")
		)
	}

	return (
		<Nav className="ms-auto flex-lg-column text-lg-center p-2 ps-5 ps-lg-2">
			{navLinks.map((item, index) => (
				<Nav.Link href={item.path} key={index} active={isActive(item.path)}>
					{item.name}
				</Nav.Link>
			))}
		</Nav>
	)
}

export default NavList
