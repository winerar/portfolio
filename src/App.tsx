// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "aos/dist/aos.css"
import aos from "aos"
// import "./style.css"
import "@styles/index.scss"
import { RouterProvider, createHashRouter } from "react-router-dom"
import Home from "./components/Content/Home"
import Services from "./components/Content/Services"
import Projects from "./components/Content/Projects"
import About from "./components/Content/About"
import Reviews from "./components/Content/Reviews"
import Blog from "./components/Content/Blog"
import Contact from "./components/Content/Contact"
import Main from "./components/pages/Main"
// import Main from "./pages/Main"

const router = createHashRouter([
	{
		path: "/",
		Component: Main,
		children: [
			{
				path: "home",
				Component: Home,
			},
			{
				path: "services",
				Component: Services,
			},
			{
				path: "work",
				Component: Projects,
			},
			{
				path: "about",
				Component: About,
			},
			{
				path: "reviews",
				Component: Reviews,
			},
			{
				path: "blog",
				Component: Blog,
			},
			{
				path: "contact",
				Component: Contact,
			},
		],
	},
])

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

	return <RouterProvider router={router} />
	// return <Main />
}

export default App
