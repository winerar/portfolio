import { INavItemProps } from "../../types"

const NavItem: React.FC<INavItemProps> = ({ name, path }): JSX.Element => {
	return (
		<li className="nav-item">
			<a className="nav-link" aria-current="page" href={path}>
				{name}
			</a>
		</li>
	)
}

export default NavItem
