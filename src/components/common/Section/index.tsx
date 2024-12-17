import { ISectionComponent } from "../../../types"
import Header from "./components/Header"

const Section: ISectionComponent = ({ id, children }) => {
	return (
		<section
			id={id}
			className="section full-height d-flex flex-column justify-content-center px-lg-5 py-5"
		>
			<div className="container">{children}</div>
		</section>
	)
}

Section.Header = Header

export default Section
