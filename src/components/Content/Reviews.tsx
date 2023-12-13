import { reviews } from "../../constants"
import Section from "../common/Section"
import Review from "./Review"
import SectionHeader from "./SectionHeader"

const Reviews: React.FC = (): JSX.Element => {
	return (
		<Section id="reviews">
			<SectionHeader title="What My Customers Say" subtitle="Reviews" />
			<div className="row">
				{reviews.map((item, index) => (
					<Review index={index} {...item} key={index} />
				))}
			</div>
		</Section>
	)
}

export default Reviews
