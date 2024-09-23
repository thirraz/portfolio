import GridContainer from "../containers/GridContainer"
import ProjectComponent from "./ProjectComponent"

import theWildOasis from "../../assets/projects_covers/the-wild-oasis.jpg"
import hugeBobcat from "../../assets/projects_covers/huge-bobcat.jpg"
import desertGlobal from "../../assets/projects_covers/desert-global.jpg"
import hopewayDesign from "../../assets/projects_covers/hopeway.jpg"
import ptTranslations from "../../locale/pt.json"
import enTranslations from "../../locale/en.json"
import { useLanguageContext } from "../../contexts/LanguageContext"

function ProjectsGrid() {
	const { language } = useLanguageContext()
	const projectsInfo = [
		{
			src: theWildOasis,
			link: "https://the-wild-oasis-with-typescript-843dfw587-thirrazs-projects.vercel.app/",
			description:
				language == "pt-BR"
					? ptTranslations.translation["projects"][0]
					: enTranslations.translation["projects"][0]
		},
		{
			src: desertGlobal,
			link: "https://desertglobal.netlify.app/",
			className: "sm:col-start-2 sm:col-span-2",
			description:
				language == "pt-BR"
					? ptTranslations.translation["projects"][1]
					: enTranslations.translation["projects"][1]
		},
		{
			src: hugeBobcat,
			link: "https://huge-bobcat.vercel.app/",
			className: "sm:col-span-2",
			description:
				language == "pt-BR"
					? ptTranslations.translation["projects"][2]
					: enTranslations.translation["projects"][2]
		},
		{
			src: hopewayDesign,
			link: "https://hopeway.site",
			description:
				language == "pt-BR"
					? ptTranslations.translation["projects"][3]
					: enTranslations.translation["projects"][3]
		}
	]

	return (
		<section id="projects">
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
		</section>
	)
}

export default ProjectsGrid
