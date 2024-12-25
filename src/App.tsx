import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import aos from "aos"
import "./style.css"
import { RouterProvider, createHashRouter } from "react-router-dom"
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import { messages as enMessages } from "./locales/en/messages"
import { messages as ruMessages } from "./locales/ru/messages"
import Home from "./components/Content/Home"
import Services from "./components/Content/Services"
import Projects from "./components/Content/Projects"
import About from "./components/Content/About"
import Reviews from "./components/Content/Reviews"
import Blog from "./components/Content/Blog"
import Contact from "./components/Content/Contact"
import Main from "./pages/Main"

i18n.load({
	en: enMessages,
	ru: ruMessages,
})
i18n.activate("en")

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
		<I18nProvider i18n={i18n}>
			<RouterProvider router={router} />
		</I18nProvider>
	)
}

export default App
