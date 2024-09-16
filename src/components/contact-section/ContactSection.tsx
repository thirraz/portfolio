import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import AnimatedBorder from "../AnimatedBorder"
import ContactButtonComponent from "./ContactButtonComponent"
import { IoLogoInstagram } from "react-icons/io5"
import { FaBluesky } from "react-icons/fa6"
import { useTranslation } from "react-i18next"

const contactLinks = [
	{
		title: "thiagofernandosouza20@gmail.com",
		link: "mailto:thiagofernandosouza20@gmail.com"
	},
	{
		title: "+55 11 99398-5592",
		link: "https://wa.me//5511993985592?text=Ol%C3%A1%20Thiago!"
	},
	{
		title: "@thirraz",
		link: "https://www.instagram.com/thirrazz/",
		icon: <IoLogoInstagram />
	},
	{
		title: "Thiago Morais",
		link: "https://www.linkedin.com/in/thiago-morais-b00b84221/",
		icon: <FaLinkedinIn />
	},
	{
		title: "@thirraz.bsky.social",
		link: "https://bsky.app/profile/thirraz.bsky.social",
		icon: <FaBluesky />
	},
	{
		title: "/thirraz",
		link: "https://github.com/thirraz",
		icon: <FaGithub />
	}
]

function ContactSection() {
	const { t: translate } = useTranslation()

	return (
		<section id="contact">
			<AnimatedBorder
				cardWrapperClassName="h-[580px] md:h-[400px]"
				cardContentClassName="text-center md:text-left"
			>
				<h2 className="font-serif flex-1 font-semibold text-[clamp(1.8rem,4vw,2.5rem)] leading-[3.3rem] md:leading-[3.5rem]">
					{translate("contactTitle")}
				</h2>
				<div className="flex flex-1 flex-wrap gap-4 pb-4 justify-center items-center">
					{contactLinks.map(({ link, title, icon }) => (
						<ContactButtonComponent
							link={link}
							title={title}
							icon={icon}
						/>
					))}
				</div>
			</AnimatedBorder>
		</section>
	)
}

export default ContactSection
