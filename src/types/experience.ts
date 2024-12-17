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
	monthFrom?: string
	monthTo?: string
	website?: string
	stack?: Array<string>
}
