import useTranslate from "../../hooks/useTranslate"
import { IExperienceListProps } from "../../types"
import ExperienceCard from "./ExperienceCard"

const ExperienceList: React.FC<IExperienceListProps> = ({ title, items }) => {
	const { t } = useTranslate()
	return (
		<div className="col-lg-6">
			<h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
				{t(title)}
			</h3>
			<div className="row gy-4">
				{items.map((item, index) => (
					<ExperienceCard index={index} {...item} key={index} />
				))}
			</div>
		</div>
	)
}

export default ExperienceList
