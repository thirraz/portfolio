import { useTranslation } from "react-i18next"
import AnimatedBorder from "../AnimatedBorder"

function AboutMeSection() {
	const { t: translate } = useTranslation()

	return (
		<section id="about-me">
			<AnimatedBorder>
				<h2 className="font-serif font-semibold leading-[3.3rem] md:leading-[3.5rem] text-[clamp(2rem,7vw,3rem)]">
					{translate("sectionAboutMeTitle")}
				</h2>
				<p className="text-2xl clamp(1.8rem,4vw,2rem)">
					{translate("sectionAboutMeContent")}
				</p>
			</AnimatedBorder>
		</section>
	)
}

export default AboutMeSection
