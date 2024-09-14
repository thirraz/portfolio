import AnimatedBorder from "../AnimatedBorder"

function AboutMeSection() {
	return (
		<div id="about-me">
			<AnimatedBorder>
				<h2 className="font-serif font-semibold leading-[3.3rem] md:leading-[3.5rem] text-[clamp(2rem,7vw,3rem)]">
					Hi! I&apos;m Thiago, a Front-end developer located in São Paulo,
					Brazil.
				</h2>
				<p className="text-2xl clamp(1.8rem,4vw,2rem)">
					With 2 years of experience, I studied and worked to create
					intuitive and engaging digital experiences.
				</p>
			</AnimatedBorder>
		</div>
	)
}

export default AboutMeSection
