import GridContainer from "../containers/GridContainer"
import ProjectComponent from "./ProjectComponent"

import theWildOasis from "../../assets/projects_covers/the-wild-oasis.jpg"
import hugeBobcat from "../../assets/projects_covers/huge-bobcat.jpg"
import desertGlobal from "../../assets/projects_covers/desert-global.jpg"
import hopewayDesign from "../../assets/projects_covers/hopeway.jpg"
import i18next from "i18next"

const projectsInfo = () => [
	{
		src: theWildOasis,
		link: "https://the-wild-oasis-with-typescript-843dfw587-thirrazs-projects.vercel.app/",
		description: i18next.t("projectTWO")
	},
	{
		src: desertGlobal,
		link: "https://desertglobal.netlify.app/",
		className: "sm:col-start-2 sm:col-span-2",
		description: i18next.t("projectDG")
	},
	{
		src: hugeBobcat,
		link: "https://huge-bobcat.vercel.app/",
		className: "sm:col-span-2",
		description: i18next.t("projectHugeBobcat")
	},
	{
		src: hopewayDesign,
		link: "https://hopeway.site",
		description: i18next.t("projectHD")
	}
]

function ProjectsGrid() {
	return (
		<section id="projects">
			<GridContainer className=" md:[grid-template-columns:1fr_15rem_1fr] border mt-20  z-20">
				{projectsInfo().map(({ link, src, className, description }, i) => (
					<ProjectComponent
						key={i}
						link={link}
						src={src}
						className={className}
						description={description}
					/>
				))}
			</GridContainer>
		</section>
	)
}

export default ProjectsGrid
