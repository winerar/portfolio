import CaretDown from "../../assets/icons/caret-down-fill.svg?react"
import Download from "../../assets/icons/download.svg?react"
import { profile } from "../../constants"
import Section from "../common/Section"
import cv from "../../assets/cv/Alexander Karachevtsev CV 2024.pdf"

const Home: React.FC = () => {
	return (
		<Section id="home">
			<div className="row">
				<div className="col-lg-8">
					<h1 className="display-4 fw-bold" data-aos="fade-up">
						Hi, my name is{" "}
						<span className="text-brand">{profile.firstName}</span>{" "}
						<span className="d-block">
							I'm a <span className="text-brand">{profile.specialization}</span>
							{` from ${profile.location}`}
						</span>
					</h1>
					<p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">
						I am a dedicated Frontend React Developer with experience in
						building dynamic and responsive web applications. Currently, I am
						working on developing the frontend for a complex web application
						using React and MUI. My current tech stack includes React, MUI,
						TypeScript, Flux and Vite. Feel free to reach out if you have any
						questions or if you are interested in collaborating on a project.
					</p>
					<div
						className="d-flex flex-column flex-lg-row gap-4 align-items-center"
						data-aos="fade-up"
						data-aos-delay="600"
					>
						<a
							href="#about"
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
