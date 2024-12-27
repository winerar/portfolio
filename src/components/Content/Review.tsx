import StarFilled from "../../assets/icons/star-fill.svg?react"
import Star from "../../assets/icons/star.svg?react"
import useTranslate from "../../hooks/useTranslate"
import { IReviewProps } from "../../types"
import { delay } from "../../utils"
import Card from "../common/Card"

const Review: React.FC<IReviewProps> = ({
	text,
	author,
	authorInfo,
	rating,
	index = 0,
}) => {
	const { t } = useTranslate()

	return (
		<Card className="col-lg-6 col-xl-4" index={index}>
			<div className="text-brand d-flex column-gap-1">
				{[...Array(5)].map((_e, i) =>
					i < rating ? (
						<StarFilled
							className="icon-small"
							data-aos="flip-left"
							data-aos-delay={`${delay(index + i, 100, 150, 6000)}`}
							key={i}
						/>
					) : (
						<Star
							className="icon-small"
							data-aos="flip-left"
							data-aos-delay={`${delay(index + i, 100, 150, 6000)}`}
							key={i}
						/>
					)
				)}
			</div>
			<p className="my-3">{t(text)}</p>
			<div className="person">
				<h3 className="h5">{t(author)}</h3>
				<p className="mb-0">{t(authorInfo)}</p>
			</div>
		</Card>
	)
}

export default Review
