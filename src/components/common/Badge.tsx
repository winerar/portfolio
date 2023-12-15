import { IBadgeProps } from "../../types"

const Badge: React.FC<IBadgeProps> = ({ text }): JSX.Element => {
	return <span className="badge rounded-pill text-base bg-brand">{text}</span>
}

export default Badge
