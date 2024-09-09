import { twMerge } from "tailwind-merge"

type Props = {
	children: React.ReactNode
	className?: string
}

function AnimatedBorder({ children, className }: Props) {
	return (
		<div
			className={twMerge(
				"card-wrapper max-w-[1200px] min-h-[400px] text-white",
				className
			)}
		>
			<div className="card-content text-center md:text-left flex flex-col gap-y-5 md:gap-0 md:flex-row items-center justify-center">
				{children}
			</div>
		</div>
	)
}

export default AnimatedBorder
