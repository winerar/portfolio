import { ICardImageProps } from "../../../../types"

const Image: React.FC<ICardImageProps> = ({ src, alt }): JSX.Element => {
	return (
		<div className="card-custom__image rounded-4 w-100">
			<img loading="lazy" src={src} alt={alt} className="rounded-4" width={"512px"} height={"252.533px"} />
		</div>
	)
}

export default Image
