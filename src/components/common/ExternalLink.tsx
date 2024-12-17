import Arrow from "../../assets/icons/box-arrow-up-right.svg?react"
import { IExternalLinkProps } from "../../types"

const ExternalLink: React.FC<IExternalLinkProps> = ({ text, link }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="d-inline-flex gap-2 align-items-center link-custom"
		>
			<span>{text}</span>
			<Arrow />
		</a>
	)
}

export default ExternalLink
