import GridContainer from "../containers/GridContainer"
import ProjectComponent from "./ProjectComponent"

import theWildOasis from "../../assets/projects_covers/the-wild-oasis.jpg"
import hugeBobcat from "../../assets/projects_covers/huge-bobcat.jpg"
import desertGlobal from "../../assets/projects_covers/desert-global.jpg"
import hopewayDesign from "../../assets/projects_covers/hopeway.jpg"

const projectsInfo = [
	{
		src: theWildOasis,
		link: "#",
		description:
			"An internal app for a small hotel boutique that checks the entry and exit of customers. Manages all reservations cabins and also the customers"
	},
	{
		src: desertGlobal,
		link: "#",
		className: "sm:col-start-2 sm:col-span-2",
		description:
			"Do you need parts for your car, or some tool to fix it? Desert Global has that and more!"
	},
	{
		src: hugeBobcat,
		link: "#",
		className: "sm:col-span-2",
		description:
			"A streaming platform with an ENORMOUS amount of movies, for an affordable price. Don’t waste any more money, subscribe to Huge Bobcat!"
	},
	{
		src: hopewayDesign,
		link: "#",
		description:
			"A portfolio website for a webdesign agency called Hopeway Design"
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
				{projectsInfo.map(({ link, src, className, description }, i) => (
					<ProjectComponent
						key={i}
						link={link}
						src={src}
						className={className}
						description={description}
					/>
				))}
			</GridContainer>
		</>
	)
}

export default ProjectsGrid
