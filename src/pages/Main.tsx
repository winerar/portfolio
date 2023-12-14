import React from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"

const Main: React.FC = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<Content />
		</>
	)
}

export default Main
