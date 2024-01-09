import { Months } from "."

export interface IEducation extends IExperience {
	degree: string
	faculty: string
}

export interface IExperience {
	position: string
	organization: string
	city: string
	country: string
	description: string
	yearFrom: number
	yearTo?: number
	monthFrom?: Months
	monthTo?: Months
	website?: string
}
