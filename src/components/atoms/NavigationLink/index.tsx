import "./style.scss"
import { ReactNode } from "react"

interface Props {
	href: string
	children: ReactNode
	active: boolean
}

const NavigationLink = ({
	href,
	children,
	active = false,
}: Props): JSX.Element => {
	return (
		<a className={`nav-link${active ? " nav-link__active" : ""}`} href={href}>
			{children}
		</a>
	)
}

export default NavigationLink
