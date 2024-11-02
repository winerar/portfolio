import Footer from "../Footer"
import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Home from "./Home"
// import Projects from "./Projects"
import Reviews from "./Reviews"
// import Services from "./Services"

const Content = () => {
	return (
		<div id="content-wrapper">
			<Home />
			{/* <Services /> */}
			{/* <Projects /> */}
			<About />
			<Reviews />
			<Blog />
			<Contact />
			<Footer />
		</div>
	)
}

export default Content
