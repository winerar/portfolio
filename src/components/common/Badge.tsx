import React from "react"
import { IBadgeProps } from "../../types"

const Badge: React.FC<IBadgeProps> = ({ text }) => {
	return <span className="badge rounded-pill text-base bg-brand">{text}</span>
}

export default Badge
