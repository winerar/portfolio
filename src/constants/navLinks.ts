import { useLingui } from "@lingui/react"
import { INavLink } from "../types"

const { i18n } = useLingui()

export const navLinks: Array<INavLink> = [
	{
		name: i18n._("Home"),
		path: "#home",
	},
	// {
	// 	name: "Services",
	// 	path: "#services",
	// },
	// {
	// 	name: "Work",
	// 	path: "#work",
	// },
	{
		name: "About",
		path: "#about",
	},
	{
		name: "Reviews",
		path: "#reviews",
	},
	{
		name: "Blog",
		path: "#blog",
	},
	{
		name: "Contact",
		path: "#contact",
	},
]
