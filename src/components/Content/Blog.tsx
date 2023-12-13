import { posts } from "../../constants"
import Section from "../common/Section"
import BlogPost from "./BlogPost"
import SectionHeader from "./SectionHeader"

const Blog = () => {
	return (
		<Section id="blog">
			<SectionHeader title="Latest Blog Posts" subtitle="Blog" />
			<div className="row row-gap-4">
				{posts.map((post, index) => (
					<BlogPost index={index} {...post} key={index} />
				))}
			</div>
		</Section>
	)
}

export default Blog
