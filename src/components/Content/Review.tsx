import StarFilled from "../../assets/icons/star-fill.svg?react"
import Star from "../../assets/icons/star.svg?react"
import { IReviewProps } from "../../types"
import { delay } from "../../utils"
import Card from "../common/Card"

const Review: React.FC<IReviewProps> = ({
	text,
	author,
	authorInfo,
	rating,
	index = 0,
}): JSX.Element => {
	return (
		<Card className="col-md-4" index={index}>
			<div className="text-brand d-flex column-gap-1">
				{[...Array(5)].map((_e, i) =>
					i < rating ? (
						<StarFilled
							className="icon-small"
							data-aos="flip-left"
							data-aos-delay={`${delay(i)}`}
							key={i}
						/>
					) : (
						<Star
							className="icon-small"
							data-aos="flip-left"
							data-aos-delay={`${delay(i)}`}
							key={i}
						/>
					)
				)}
			</div>
			<p className="my-3">{text}</p>
			<div className="person">
				<h5>{author}</h5>
				<p className="mb-0">{authorInfo}</p>
			</div>
		</Card>
	)
}

export default Review
