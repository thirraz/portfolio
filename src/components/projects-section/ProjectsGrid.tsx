import GridContainer from "../GridContainer"

function ProjectsGrid() {
	return (
		<GridContainer className=" md:[grid-template-columns:1fr_15rem_1fr]">
			<div className="h-56 rounded-xl bg-[#ff0000] " />
			<div className="h-56 rounded-xl bg-[#801212] sm:col-start-2 sm:col-span-2" />
			<div className="h-56 rounded-xl bg-[#943d3d] sm:col-span-2" />
			<div className="h-56 rounded-xl bg-[#5e1e1e]" />
		</GridContainer>
	)
}

export default ProjectsGrid
