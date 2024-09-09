import { useState } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
	src: string
	className?: string
	link: string
	description: string
}

function ProjectComponent({ src, className, link, description }: Props) {
	const [isVisible, setIsVisible] = useState(false)
	return (
		<>
			<div
				className="data-[isVisible=true]:fixed data-[isVisible=false]:hidden px-8 py-3 text-black bg-white top-2 left-1/2 -translate-x-1/2 z-50 duration-200 rounded-lg shadow-md text-center"
				data-isVisible={isVisible}
			>
				{description}
			</div>
			<a
				href={link}
				style={{ backgroundImage: `url(${src})` }}
				className={twMerge(
					"h-64 rounded-xl bg-center bg-cover hover:border-b hover:border-white hover:-translate-y-2 duration-200",
					className
				)}
				onMouseEnter={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}
			/>
		</>
	)
}

export default ProjectComponent
