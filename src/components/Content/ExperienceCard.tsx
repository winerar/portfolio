import React from "react"
import { IExperienceCardProps } from "../../types"
import Card from "../common/Card"
import ExternalLink from "../common/ExternalLink"

const ExperienceCard: React.FC<IExperienceCardProps> = ({
	position,
	organization,
	description,
	city,
	country,
	yearFrom,
	yearTo,
	monthFrom,
	monthTo,
	index = 0,
	website,
}): JSX.Element => {
	return (
		<Card className="col-12" index={index}>
			<h4>{position}</h4>
			<div
				className={`text-brand ${
					description ? "mb-2" : "mb-0"
				} d-flex justify-content-between flex-wrap gap-1`}
			>
				{website ? (
					<ExternalLink text={organization} link={website} />
				) : (
					<span>{organization}</span>
				)}
				<span>
					{`${city}, ${country} (${
						monthFrom ? `${monthFrom} ` : ""
					}${yearFrom} - ${monthTo ? `${monthTo} ` : ""}${
						yearTo ?? "present"
					})`}
				</span>
			</div>
			{description ?? <p className="mb-0">{description}</p>}
		</Card>
	)
}

export default ExperienceCard
