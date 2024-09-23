import { twMerge } from "tailwind-merge"

type Props = {
	children: React.ReactNode
	cardWrapperClassName?: string
	cardContentClassName?: string
}

function AnimatedBorder({
	children,
	cardWrapperClassName,
	cardContentClassName
}: Props) {
	return (
		<div
			className={twMerge(
				"card-wrapper max-w-[1200px] min-h-[500px] md:min-h-[400px] text-white",
				cardWrapperClassName
			)}
		>
			<div
				className={twMerge(
					"card-content text-center md:text-left flex flex-col gap-y-5 md:gap-0 md:flex-row items-center justify-center",
					cardContentClassName
				)}
			>
				{children}
			</div>
		</div>
	)
}

export default AnimatedBorder
