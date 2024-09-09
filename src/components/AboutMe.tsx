import AnimatedBorder from "./AnimatedBorder"

function AboutMe() {
	return (
		<AnimatedBorder>
			<h2 className="font-serif leading-[3.1rem] md:leading-[3.5rem] text-[clamp(2rem,7vw,3rem)]">
				Hi! I’m Thiago, a Front-end developoer located in São Paulo, Brazil.
			</h2>
			<p className="text-2xl clamp(1.8rem,4vw,2rem)">
				With 2 years of experience, I studied and worked to create intuitive
				and engaging digital experiences.
			</p>
		</AnimatedBorder>
	)
}

export default AboutMe
