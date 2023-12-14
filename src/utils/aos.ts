export const delay = (
	index: number,
	step: number = 300,
	basicDelay: number = 300,
	maxDelay: number = 2100
): number => {
	return ((index * step) % maxDelay) + basicDelay
}
