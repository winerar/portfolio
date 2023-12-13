import { ISectionProps } from "../../types"

const Section: React.FC<ISectionProps> = ({ id, children }): JSX.Element => {
	return (
		<section
			id={id}
			className="full-height d-flex flex-column justify-content-center px-lg-5 py-5 border-bottom border-2 border-white"
		>
			<div className="container">{children}</div>
		</section>
	)
}

export default Section
