import { IProjectCardProps } from "../../types"
import Card from "../common/Card"
import ExternalLink from "./../common/ExternalLink"

const ProjectCard: React.FC<IProjectCardProps> = ({
	name,
	description,
	image,
	repo,
	index = 0,
}): JSX.Element => {
	return (
		<Card className="col-md-6" index={index} image={{ src: image, alt: name }}>
			<div className="card-custom__content">
				<h4>{name}</h4>
				<p>{description}</p>
				<ExternalLink text="Open repo" link={repo} />
			</div>
		</Card>
	)
}

export default ProjectCard
