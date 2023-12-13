import { projects } from "../../constants"
import Section from "../common/Section"
import ProjectCard from "./ProjectCard"
import SectionHeader from "./SectionHeader"

const Projects = () => {
	return (
		<Section id="work">
			<SectionHeader title="My Recent Projects" subtitle="Work" />
			<div className="row row-gap-4">
				{projects.map((project, index) => (
					<ProjectCard
						name={project.name}
						description={project.description}
						image={project.image}
						repo={project.repo}
						index={index}
						key={index}
					/>
				))}
			</div>
		</Section>
	)
}

export default Projects
