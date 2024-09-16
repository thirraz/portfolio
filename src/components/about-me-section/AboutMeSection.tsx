import AnimatedBorder from "../AnimatedBorder"

function AboutMeSection() {
	return (
		<section id="about-me">
			<AnimatedBorder>
				<h2 className="font-serif font-semibold leading-[3.3rem] md:leading-[3.5rem] text-[clamp(2rem,7vw,3rem)]">
					Olá! Eu sou o Thiago, um desenvolvedor Front-end que atualmente
					mora em São Paulo.
				</h2>
				<p className="text-2xl clamp(1.8rem,4vw,2rem)">
					Com 2 anos de experiência, eu criei experiências digitais
					intuitivas e modernas utilizando as principais tecnologias do
					mercado.
				</p>
			</AnimatedBorder>
		</section>
	)
}

export default AboutMeSection
