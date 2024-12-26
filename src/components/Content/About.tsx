import { education, experience } from "../../constants"
import Section from "../common/Section"
import ExperienceList from "./ExperienceList"
import useTranslate from "../../hooks/useTranslate"

const About: React.FC = () => {
	const { t } = useTranslate()
	return (
		<Section id="about">
			<Section.Header title="My Education & Experience" subtitle={t("About")} />
			<div className="row gy-5">
				<ExperienceList title="Experience" items={experience} />
				<ExperienceList title="Education" items={education} />
			</div>
		</Section>
	)
}

export default About
