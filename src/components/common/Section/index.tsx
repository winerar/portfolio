import { ISectionComponent } from "../../../types"
import Header from "./components/Header"

const Section: ISectionComponent = ({ id, children }) => {
	return (
		<section
			id={id}
			className="full-height d-flex flex-column justify-content-center px-lg-5 py-5 border-bottom border-2 border-white"
		>
			<div className="container">{children}</div>
		</section>
	)
}

Section.Header = Header

export default Section
