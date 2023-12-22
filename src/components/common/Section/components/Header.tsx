import { ISectionHeaderProps } from "../../../../types"

const Header: React.FC<ISectionHeaderProps> = ({
	title,
	subtitle,
}): JSX.Element => {
	return (
		<div className="row pb-4" data-aos="fade-up">
			<div className="col-lg-10">
				<p className="h6 text-uppercase text-brand">{subtitle}</p>
				<h2 className="h1">{title}</h2>
			</div>
		</div>
	)
}

export default Header
