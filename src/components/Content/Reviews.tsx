import { reviews } from "../../constants"
import Section from "../common/Section"
import Review from "./Review"
import SectionHeader from "../common/SectionHeader"

const Reviews: React.FC = (): JSX.Element => {
	return (
		<Section id="reviews">
			<SectionHeader
				title="What My Customers and Colleagues Say"
				subtitle="Reviews"
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
