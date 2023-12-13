import { Nav } from "react-bootstrap"
import { navLinks } from "../../constants"

const NavList: React.FC = (): JSX.Element => {
	return (
		<Nav className="ms-auto flex-lg-column text-lg-center">
			{navLinks.map((item, index) => (
				<Nav.Link href={item.path} key={index}>
					{item.name}
				</Nav.Link>
			))}
		</Nav>
	)
}

export default NavList
