import { ISectionHeaderProps } from "../../types"

const SectionHeader: React.FC<ISectionHeaderProps> = ({
	title,
	subtitle,
}): JSX.Element => {
	return (
		<div className="row pb-4" data-aos="fade-up">
			<div className="col-lg-10">
				<h6 className="text-uppercase text-brand">{subtitle}</h6>
				<h2 className="h1">{title}</h2>
			</div>
		</div>
	)
}

export default SectionHeader
