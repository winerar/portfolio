import { Stack } from "."

export type ProjectInfo = {
	name: string
	description: string
	image: string
	stack: Array<Stack>
	repo: string
}
