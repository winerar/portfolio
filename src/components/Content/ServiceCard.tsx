import React from "react"
import { IServiceCardProps } from "../../types"
import Card from "../common/Card"
import ExternalLink from "../common/ExternalLink"

const ServiceCard: React.FC<IServiceCardProps> = ({
	name,
	Icon,
	description,
	link,
	index = 0,
}): JSX.Element => {
	return (
		<Card className="col-md-4" index={index}>
			<div className="icon-container rounded-4">
				<Icon className="icon" />
			</div>
			<h5 className="mt-4 mb-2">{name}</h5>
			<p>{description}</p>
			<ExternalLink text="Read more" link={link} />
		</Card>
	)
}

export default ServiceCard
