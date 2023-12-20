import { IProjectCardProps } from "../../types"
import Badge from "../common/Badge"
import Card from "../common/Card"
import ExternalLink from "./../common/ExternalLink"

const ProjectCard: React.FC<IProjectCardProps> = ({
	name,
	description,
	stack,
	image,
	repo,
	index = 0,
}): JSX.Element => {
	return (
		<Card className="col-md-6" index={index} image={{ src: image, alt: name }}>
			<div className="card-custom__content">
				<h3 className="h4">{name}</h3>
				<p>{description}</p>
				<h4 className="h5">Stack:</h4>
				<p className="d-flex gap-2 flex-wrap">
					{stack.map((item, index) => (
						<Badge text={item} key={index} />
					))}
				</p>
				<ExternalLink text="Open repo" link={repo} />
			</div>
		</Card>
	)
}

export default ProjectCard
