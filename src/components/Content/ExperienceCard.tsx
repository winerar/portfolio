import React from "react"
import { IExperienceCardProps } from "../../types"
import Card from "../common/Card"

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
			<p className={`text-brand ${description ? "mb-2" : "mb-0"}`}>
				{website ? (
					<a href={website} target="_blank" className="link-custom text-brand">
						{organization}
					</a>
				) : (
					organization
				)}
				{`, ${city}, ${country} (${
					monthFrom ? `${monthFrom} ` : ""
				}${yearFrom} - ${monthTo ? `${monthTo} ` : ""}${yearTo ?? "present"})`}
			</p>
			{description ?? <p className="mb-0">{description}</p>}
		</Card>
	)
}

export default ExperienceCard
