import "./style.scss"

interface Props {
	src: string
	alt: string
	width?: string
	height?: string
}

const RoundImage = ({
	src,
	alt,
	width = "100%",
	height = "auto",
}: Props): JSX.Element => {
	return (
		<img
			loading="lazy"
			src={src}
			alt={alt}
			className="d-none d-lg-block round-image"
			width={width}
			height={height}
		/>
	)
}

export default RoundImage
