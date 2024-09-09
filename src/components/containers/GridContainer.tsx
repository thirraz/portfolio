import { twMerge } from "tailwind-merge"

type Props = {
	children: React.ReactNode
	className?: string
}

function GridContainer({ children, className }: Props) {
	return (
		<div
			className={twMerge(
				"grid min-h-fit md:[grid-template-columns:1fr_6rem_1fr] md:grid-rows-2 gap-4",
				className
			)}
		>
			{children}
		</div>
	)
}

export default GridContainer
