import { Profile } from "../types"
import avatar from "../assets/images/DSC_0326.webp"

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
