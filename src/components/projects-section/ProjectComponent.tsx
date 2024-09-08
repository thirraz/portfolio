import { useState } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
	src: string
	className?: string
	link: string
}

function ProjectComponent({ src, className, link }: Props) {
	const [isMouseOnProjectCard, setisMouseOnProjectCard] = useState(false)
	return (
		<>
			<a
				href={link}
				style={{ backgroundImage: `url(${src})` }}
				className={twMerge(
					"h-64 rounded-xl bg-center bg-cover hover:border-b hover:border-white hover:-translate-y-2 duration-200",
					className
				)}
				onMouseEnter={() => console.log("enter!")}
				onMouseLeave={() => console.log("leave!")}
			></a>
		</>
	)
}

export default ProjectComponent
