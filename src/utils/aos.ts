export const delay = (
	index: number,
	step: number = 100,
	basicDelay: number = 100,
	maxDelay: number = 1000
): number => {
	return ((index * step) % maxDelay) + basicDelay
}
