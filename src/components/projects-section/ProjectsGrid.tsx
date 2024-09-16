import GridContainer from "../containers/GridContainer"
import ProjectComponent from "./ProjectComponent"

import theWildOasis from "../../assets/projects_covers/the-wild-oasis.jpg"
import hugeBobcat from "../../assets/projects_covers/huge-bobcat.jpg"
import desertGlobal from "../../assets/projects_covers/desert-global.jpg"
import hopewayDesign from "../../assets/projects_covers/hopeway.jpg"

const projectsInfo = [
	{
		src: theWildOasis,
		link: "https://the-wild-oasis-with-typescript-843dfw587-thirrazs-projects.vercel.app/",
		description:
			"Uma aplicação interna para uma pequena boutique de hotel que checa a entrada e saída de clientes."
	},
	{
		src: desertGlobal,
		link: "https://desertglobal.netlify.app/",
		className: "sm:col-start-2 sm:col-span-2",
		description:
			"Você precisa de peças para o seu carro, ou alguma ferramenta para consertá-lo? A Desert Global tem tudo isso e muito mais!"
	},
	{
		src: hugeBobcat,
		link: "https://huge-bobcat.vercel.app/",
		className: "sm:col-span-2",
		description:
			"Uma plataforma de streaming com uma quantidade ENORME de filmes, por um preço acessível. Não perca mais dinheiro, inscreva-se na Huge Bobcat!"
	},
	{
		src: hopewayDesign,
		link: "https://hopeway.site",
		description:
			"Uma Landing Page para uma agência de webdesign chamada Hopeway Design."
	}
]

function ProjectsGrid() {
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
