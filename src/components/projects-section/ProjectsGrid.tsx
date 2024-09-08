import GridContainer from "../GridContainer"
import ProjectComponent from "./ProjectComponent"

import theWildOasis from "../../assets/projects_covers/the-wild-oasis.jpg"
import hugeBobcat from "../../assets/projects_covers/huge-bobcat.jpg"
import desertGlobal from "../../assets/projects_covers/desert-global.jpg"
import hopewayDesign from "../../assets/projects_covers/hopeway.jpg"

const projectsInfo = [
	{
		src: theWildOasis,
		link: "#"
	},
	{
		src: desertGlobal,
		link: "#",
		className: "sm:col-start-2 sm:col-span-2"
	},
	{
		src: hugeBobcat,
		link: "#",
		className: "sm:col-span-2"
	},
	{
		src: hopewayDesign,
		link: "#"
	}
]

function ProjectsGrid() {
	return (
		<>
			{/* <div className="text-purple-900 bg-white px-4 py-1 sticky top-2 z-10 max-w-72 mx-auto rounded-lg overflow-visible">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				voluptate unde deleniti vel impedit illum est vero alias nihil ex.
			</div> */}
			<GridContainer className=" md:[grid-template-columns:1fr_15rem_1fr] border mt-20  z-20">
				{projectsInfo.map(({ link, src, className }, i) => (
					<ProjectComponent
						key={i}
						link={link}
						src={src}
						className={className}
					/>
				))}
			</GridContainer>
		</>
	)
}

export default ProjectsGrid
