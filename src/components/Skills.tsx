import { FaReact, FaSass } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"

function Skills() {
	return (
		<div className="flex gap-3 items-center">
			<p className="text-gray text-lg">Front-end Developer</p>
			<div className="flex gap-3 py-1 px-4 bg-white text-purple-950 max-w-fit rounded-full text-xl">
				<FaReact />
				<SiTypescript />
				<RiTailwindCssFill />
				<FaSass />
				<TbBrandFramerMotion />
			</div>
		</div>
	)
}

export default Skills
