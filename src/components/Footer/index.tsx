import Copyright from "./Copyright"
import Social from "./Social"

const Footer = () => {
	return (
		<footer className="py-5 px-lg-5">
			<div className="container">
				<div className="row gy-4 justify-content-center justify-content-lg-between">
					<div className="col-auto">
						<Copyright />
					</div>
					<div className="col-auto">
						<Social />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
