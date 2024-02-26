import React from "react"

interface Props {
	icon: "logo"
	size: "medium" | "big" | "small"
}

const Icon = ({ icon, size }: Props): JSX.Element => {
	let className = "me-3 icon"

	switch (size) {
		case "small":
			className += " icon__small"
			break
		case "medium":
			className += " icon__medium"
			break
		case "big":
			className += " icon__big"
			break
	}

	switch (icon) {
		case "logo":
			return <Logo className={className} />
	}
}

export default Icon
