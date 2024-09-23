import { useLanguageContext } from "../../contexts/LanguageContext"
import AnimatedBorder from "../AnimatedBorder"

import ptTranslations from "../../locale/pt.json"
import enTranslations from "../../locale/en.json"

function AboutMeSection() {
	const { language } = useLanguageContext()
	return (
		<section id="about-me">
			<AnimatedBorder>
				<h2 className="font-serif font-semibold leading-[3.3rem] md:leading-[3.5rem] text-[clamp(2rem,7vw,3rem)]">
					{language == "pt-BR"
						? ptTranslations.translation.aboutMe.title
						: enTranslations.translation.aboutMe.title}
				</h2>
				<p className="text-2xl clamp(1.8rem,4vw,2rem)">
					{language == "pt-BR"
						? ptTranslations.translation.aboutMe.content
						: enTranslations.translation.aboutMe.content}
				</p>
			</AnimatedBorder>
		</section>
	)
}

export default AboutMeSection
