import { posts } from "../../constants"
import useTranslate from "../../hooks/useTranslate"
import Section from "../common/Section"
import BlogPost from "./BlogPost"

const Blog = () => {
	const { t } = useTranslate()
	return (
		<Section id="blog">
			<Section.Header title={t("Latest Blog Posts")} subtitle={t("Blog")} />
			<div className="row row-gap-4">
				{posts.map((post, index) => (
					<BlogPost index={index} {...post} key={index} />
				))}
			</div>
		</Section>
	)
}

export default Blog
