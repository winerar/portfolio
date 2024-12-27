import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import aos from "aos"
import { IntlProvider } from "react-intl"
import en from "./locales/en.json"
import ru from "./locales/ru.json"
import "./style.css"
import { RouterProvider, createHashRouter } from "react-router-dom"
import Home from "./components/Content/Home"
import Services from "./components/Content/Services"
import Projects from "./components/Content/Projects"
import About from "./components/Content/About"
import Reviews from "./components/Content/Reviews"
import Blog from "./components/Content/Blog"
import Contact from "./components/Content/Contact"
import Main from "./pages/Main"

const App: React.FC = () => {
	const [router, setRouter] = useState<any>(null)

	useEffect(() => {
		if (typeof document !== "undefined") {
			aos.init({
				offset: 120,
				delay: 0,
				duration: 700,
				easing: "ease",
				once: false,
				mirror: false,
				anchorPlacement: "top-bottom",
			})

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
							path: "projects",
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
			setRouter(router)
		}
	}, [])

	if (!router) {
		return null // or a loading spinner
	}

	return (
		<IntlProvider
			messages={{ ...en, ...ru }}
			locale="en"
			defaultLocale="en"
			key="en"
		>
			<RouterProvider router={router} />
		</IntlProvider>
	)
}

export default App
