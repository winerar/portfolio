import { education, experience } from "../../constants"
import useTranslate from "../../hooks/useTranslate"
import Section from "../common/Section"
import ExperienceList from "./ExperienceList"

const About: React.FC = () => {
	const { t } = useTranslate()
	return (
		<Section id="about">
			<Section.Header
				title={t("My Education & Experience")}
				subtitle={t("About")}
			/>
			<div className="row gy-5">
				<ExperienceList title={t("Experience")} items={experience} />
				<ExperienceList title={t("Education")} items={education} />
			</div>
		</Section>
	)
}

export default About
