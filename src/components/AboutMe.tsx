function AboutMe() {
	return (
		<div className="card-wrapper max-w-[1200px] h-[400px] text-white">
			<div className="card-content text-center md:text-left flex flex-col gap-y-5 md:gap-0 md:flex-row items-center justify-center">
				<h2 className="font-serif leading-[3.1rem] md:leading-[3.5rem] text-[clamp(2rem,7vw,3rem)]">
					Hi! I’m Thiago, a Front-end developoer located in São Paulo,
					Brazil.
				</h2>
				<p className="text-2xl clamp(1.8rem,4vw,2rem)">
					With 2 years of experience, I studied and worked to create
					intuitive and engaging digital experiences.
				</p>
			</div>
		</div>
	)
}

export default AboutMe
