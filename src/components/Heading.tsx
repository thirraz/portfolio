import Skills from "./Skills"

function Heading() {
	return (
		<div className="text-white">
			<h1 className="font-serif text-[clamp(2rem,10vw,4rem)] font-semibold italic">
				Thiago Morais
			</h1>

			<Skills />
		</div>
	)
}

export default Heading
