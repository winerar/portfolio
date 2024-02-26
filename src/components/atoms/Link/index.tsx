import { ReactNode } from "react"
import "./style.scss"

interface Props {
	children: ReactNode
	href: string
	target?: "_blank" | "_parent" | "_self" | "_top"
	className?: string
	title?: string
}

const Link = ({
	children,
	href,
	target = "_self",
	className,
	title = "",
}: Props): JSX.Element => {
	return (
		<a
			href={href}
			target={target}
			className={`link${className ? ` ${className}` : ""}`}
			title={title}
		>
			{children}
		</a>
	)
}

export default Link
