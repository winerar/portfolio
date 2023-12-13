import { Stack } from "."

export interface IProject {
	name: string
	description: string
	image: string
	stack: Array<Stack>
	repo: string
}
