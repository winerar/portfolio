import { education, experience } from "../../constants"
import Section from "../common/Section"
import ExperienceList from "./ExperienceList"

const About: React.FC = () => {
	return (
		<Section id="about">
			<Section.Header title="My Education & Experience" subtitle="About" />
			<div className="row gy-5">
				<ExperienceList title="Experience" items={experience} />
				<ExperienceList title="Education" items={education} />
			</div>
		</Section>
	)
}

export default About
