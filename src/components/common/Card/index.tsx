import { ICardComponent } from "../../../types"
import { delay } from "../../../utils"
import Image from "./components/Image"

const Card: ICardComponent = ({
	index = 0,
	children,
	className = "",
	image,
}) => {
	return (
		<div
			className={className}
			data-aos="fade-up"
			data-aos-delay={`${delay(index)}`}
		>
			<div className="card-custom service bg-base rounded-4 shadow-effect">
				{image && <Image src={image.src} alt={image?.alt} />}
				<div className="p-4">{children}</div>
			</div>
		</div>
	)
}

Card.Image = Image

export default Card
