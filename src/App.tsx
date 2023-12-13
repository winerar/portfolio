import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "aos/dist/aos.css"
import aos from "aos"
import "./style.css"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

const App: React.FC = (): JSX.Element => {
	aos.init({
		offset: 120,
		delay: 0,
		duration: 700,
		easing: "ease",
		once: false,
		mirror: false,
		anchorPlacement: "top-bottom",
	})

	return (
		<>
			<Navbar />
			<Content />
		</>
	)
}

export default App
