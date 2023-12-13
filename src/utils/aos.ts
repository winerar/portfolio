export const delay = (
	index: number,
	step: number = 300,
	basicDelay: number = 300,
	maxDelay: number = 1800
): number => {
	return (index * step + basicDelay) % maxDelay
}
