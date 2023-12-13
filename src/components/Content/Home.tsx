import CaretDown from "../../assets/icons/caret-down-fill.svg?react"
import Download from "../../assets/icons/download.svg?react"
import { profile } from "../../constants"
import Section from "../common/Section"
import cv from "../../assets/cv/frontend-developer-alexander-karachevtsev-cv-en.pdf"

const Home: React.FC = (): JSX.Element => {
	return (
		<Section id="home">
			<div className="row">
				<div className="col-lg-10">
					<h1 className="display-4 fw-bold" data-aos="fade-up">
						I'm a <span className="text-brand">{profile.specialization}</span>
						{` from ${profile.location}`}
					</h1>
					<p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">
						I am {profile.fullName}
					</p>
					<div
						className="d-flex flex-column flex-lg-row gap-4 align-items-center"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<a
							href="#work"
							className="btn d-flex gap-2 align-items-center btn-brand"
						>
							<span>Explore My Work</span>
							<CaretDown />
						</a>
						<a
							href={cv}
							download
							className="d-inline-flex gap-2 align-items-center link-custom"
						>
							<span>Download CV</span>
							<Download />
						</a>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Home
