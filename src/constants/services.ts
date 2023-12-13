import Html from "../assets/icons/html5.svg?react"
import React from "../assets/icons/react.svg?react"
import { IServiceCardProps } from "../types"

export const services: Array<IServiceCardProps> = [
	{
		name: "Frontend development using HTML+CSS+JS",
		description:
			"Your vision is my priority! Expect a tailored, responsive website that not only meets but exceeds your expectations. Whether it's the sleek elegance of CSS/SASS, the power of Bootstrap, or the versatility of another framework, I've got your styling needs covered. Let's bring your ideas to life in a visually captivating and user-friendly digital experience!",
		Icon: Html,
	},
	{
		name: "Frontend development using React",
		description:
			"For more than a year, I've been immersed in the dynamic world of React and TypeScript, excelling in crafting seamless experiences through Redux and React Router. My toolkit extends beyond the basics, with hands-on expertise in Three.js, AOS, Tailwind, MUI, and Axios. Let me bring your project to life with a blend of creativity and technical prowess, ensuring a standout result that exceeds your expectations.",
		Icon: React,
	},
]
