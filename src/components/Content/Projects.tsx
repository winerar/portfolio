import { projects } from "../../constants"
import Section from "../common/Section"
import ProjectCard from "./ProjectCard"

const Projects: React.FC = (): JSX.Element => {
	return (
		<Section id="work">
			<Section.Header title="My Recent Projects" subtitle="Work" />
			<div className="row row-gap-4">
				{projects.map((project, index) => (
					<ProjectCard index={index} {...project} key={index} />
				))}
			</div>
		</Section>
	)
}

export default Projects
