import { Profile } from "../types"
import avatar from "../assets/images/me-square-tp.webp"

export const profile: Profile = {
	firstName: "Alexander",
	lastName: "Karachevtsev",
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	},
	specialization: "frontend developer",
	location: "Yerevan",
	avatar,
}
