import { reviews } from "../../constants"
import useTranslate from "../../hooks/useTranslate"
import Section from "../common/Section"
import Review from "./Review"

const Reviews: React.FC = () => {
	const { t } = useTranslate()

	return (
		<Section id="reviews">
			<Section.Header
				title={t("What My Customers and Colleagues Say")}
				subtitle={t("Reviews")}
			/>
			<div className="row row-gap-4">
				{reviews.map((item, index) => (
					<Review index={index} {...item} key={index} />
				))}
			</div>
		</Section>
	)
}

export default Reviews
