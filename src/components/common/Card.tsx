import { ICardProps } from "../../types"
import { delay } from "../../utils"
import CardImage from "./CardImage"

const Card: React.FC<ICardProps> = ({
	index = 0,
	children,
	className = "",
	image,
}): JSX.Element => {
	return (
		<div
			className={className}
			data-aos="fade-up"
			data-aos-delay={`${delay(index)}`}
		>
			<div className="card-custom service bg-base rounded-4 shadow-effect">
				{image && <CardImage src={image.src} alt={image?.alt} />}
				<div className="p-4">{children}</div>
			</div>
		</div>
	)
}

export default Card
