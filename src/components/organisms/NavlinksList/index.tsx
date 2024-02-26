import NavigationLink from "@atoms/NavigationLink"
import "./style.scss"
import { useLocation } from "react-router-dom"

interface Props {
	links: Array<NavLink>
  defaultPath?: string
}

interface NavLink {
	path: string
	name: string
}

const NavlinksList = ({ links, defaultPath }: Props): JSX.Element => {
  const location = useLocation()

	const isActive = (link: string): boolean => {
		return (
			location.pathname.substring(1) === link.substring(1) ||
			(location.pathname === "/" && link === defaultPath)
		)
	}
	return (
		<div className="ms-auto flex-lg-column text-lg-center navbar-nav">
			{links.map((item, index) => (
				<NavigationLink href={item.path} key={index} active={isActive(item.path)}>
          {item.name}
        </NavigationLink>
			))}
		</div>
	)
}

export default NavlinksList
