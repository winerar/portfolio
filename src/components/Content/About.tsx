import { useLingui } from "@lingui/react/macro"
import { education, experience } from "../../constants"
import Section from "../common/Section"
import ExperienceList from "./ExperienceList"

const About: React.FC = () => {
	const { t } = useLingui()
	return (
		<Section id="about">
			<Section.Header title="My Education & Experience" subtitle={t`About`} />
			<div className="row gy-5">
				<ExperienceList title="Experience" items={experience} />
				<ExperienceList title="Education" items={education} />
			</div>
		</Section>
	)
}

export default About
