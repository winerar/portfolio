import { ICardImageProps } from "../../types"

const CardImage: React.FC<ICardImageProps> = ({ src, alt }): JSX.Element => {
	return (
		<div className="card-custom__image rounded-4 w-100">
			<img src={src} alt={alt} className="rounded-4" />
		</div>
	)
}

export default CardImage
