import djNejtrino from "../assets/images/projects/dj_nejtrino.webp"
import forum from "../assets/images/projects/forum.webp"
import portfolio from "../assets/images/projects/portfolio.webp"
import { IProject, Stack } from "../types"

export const projects: Array<IProject> = [
	{
		name: "Landing for DJ Nejtrino",
		description:
			"Adaptive landing for Customer. In addition to development, I have also prepared images and icons using Photoshop and Illustrator.",
		stack: [Stack.HTML, Stack.CSS],
		image: djNejtrino,
		repo: "https://github.com/winerar/dj_nejtrino",
	},
	{
		name: "Forum for customer",
		description: "Adaptive forum site for Customer.",
		stack: [Stack.HTML, Stack.CSS, Stack.SASS, Stack.Bootstrap],
		image: forum,
		repo: "https://github.com/winerar/customer-forum",
	},
	{
		name: "My Portfolio Website",
		description: "Adaptive landing and smooth animations.",
		stack: [
			Stack.React,
			Stack.ReactRouter,
			Stack.TS,
			Stack.Bootstrap,
			Stack.CSS,
			Stack.PurgeCSS,
		],
		image: portfolio,
		repo: "https://github.com/winerar/portfolio",
	},
]
