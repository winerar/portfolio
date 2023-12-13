import { IEducation } from "../types"

export const education: Array<IEducation> = [
	{
		degree: "Master",
		faculty: "Information Systems and Technologies",
		get position() {
			return `${this.degree} of ${this.faculty}`
		},
		organization: "NCFU",
		city: "Stavropol",
		country: "Russia",
		description: "",
		yearFrom: 2019,
		yearTo: 2021,
	},
	{
		degree: "Bachelor",
		faculty: "Applied Mathematics and Informatics",
		get position() {
			return `${this.degree} of ${this.faculty}`
		},
		organization: "NCFU",
		city: "Stavropol",
		country: "Russia",
		description: "",
		yearFrom: 2015,
		yearTo: 2019,
	},
]
