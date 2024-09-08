import Skills from "./SkillsComponent"

function HeadingComponent() {
	return (
		<div className="text-white mb-8">
			<h1 className="font-serif text-[clamp(2rem,10vw,4rem)] font-semibold italic">
				Thiago Morais
			</h1>

			<Skills />
		</div>
	)
}

export default HeadingComponent
