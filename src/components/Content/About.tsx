import { education, experience } from "../../constants"
import Section from "../common/Section"
import ExperienceList from "./ExperienceList"
import SectionHeader from "../common/SectionHeader"

const About: React.FC = (): JSX.Element => {
	return (
		<Section id="about">
			<SectionHeader title="My Education & Experience" subtitle="About" />
			<div className="row gy-5">
				<ExperienceList title="Experience" items={experience} />
				<ExperienceList title="Education" items={education} />
			</div>
		</Section>
	)
}

export default About
