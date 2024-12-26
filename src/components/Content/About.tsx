import { useLingui } from "@lingui/react"
import { education, experience } from "../../constants"
import Section from "../common/Section"
import ExperienceList from "./ExperienceList"

const About: React.FC = () => {
	const { i18n } = useLingui()
	return (
		<Section id="about">
			<Section.Header
				title={i18n._("My Education & Experience")}
				subtitle={i18n._("About")}
			/>
			<div className="row gy-5">
				<ExperienceList title={i18n._("Experience")} items={experience} />
				<ExperienceList title={i18n._("Education")} items={education} />
			</div>
		</Section>
	)
}

export default About
