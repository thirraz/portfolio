import Skills from "./SkillsComponent"

function HeadingComponent() {
	return (
		<div className="text-white mb-8 space-y-8 md:space-y-0">
			<h1 className="font-serif text-[clamp(2rem,10vw,4rem)] font-semibold italic">
				Thiago Morais
			</h1>

			<Skills />
		</div>
	)
}

export default HeadingComponent
