export interface IReview {
	text: string
	author: string
	authorInfo: string
	rating: Rating
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5
