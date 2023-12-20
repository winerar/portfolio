import { IBlogPostProps } from "../../types"
import Card from "../common/Card"
import ExternalLink from "../common/ExternalLink"

const BlogPost: React.FC<IBlogPostProps> = ({
	title,
	date,
	image,
	link,
	index = 0,
}): JSX.Element => {
	return (
		<Card className="col-md-6" index={index} image={{ src: image, alt: title }}>
			<div className="card-custom__content">
				<p className="mb-2 text-brand">{date}</p>
				<h3 className="h5 mb-4">{title}</h3>
				<ExternalLink text="Read more" link={link} />
			</div>
		</Card>
	)
}

export default BlogPost
