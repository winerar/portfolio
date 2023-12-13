import { FunctionComponent, ReactNode, SVGProps } from "react"
import { IBlogPost, IExperience, IProject, IReview } from "."

export interface ISectionProps {
	id?: string
	children?: ReactNode
}

export interface IServiceCardProps {
	name: string
	Icon: FunctionComponent<
		SVGProps<SVGSVGElement> & { title?: string | undefined }
	>
	description: string
	index?: number
}

export interface INavItemProps {
	name: string
	path: string
}

export interface ISectionHeaderProps {
	title: string
	subtitle: string
}

export interface IProjectCardProps extends IProject {
	index?: number
}

export interface IExperienceListProps {
	title: string
	items: Array<IExperience>
}

export interface IExperienceCardProps extends IExperience {
	index?: number
}

export interface IReviewProps extends IReview {
	index?: number
}

export interface IBlogPostProps extends IBlogPost {
	index?: number
}

export interface IExternalLinkProps {
	text: string
	link: string
}

export interface ICardProps {
	index?: number
	children?: ReactNode
	className?: string
	image?: {
		src: string
		alt: string
	}
}

export interface ICardImageProps {
	src: string
	alt?: string
}
