import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import AnimatedBorder from "../AnimatedBorder"
import ContactButtonComponent from "./ContactButtonComponent"
import { IoLogoInstagram } from "react-icons/io5"
import { FaBluesky } from "react-icons/fa6"

function ContactSection() {
	return (
		<AnimatedBorder
			cardWrapperClassName="h-[580px] md:h-[400px]"
			cardContentClassName="text-center md:text-left"
		>
			<h2 className="font-serif flex-1 font-semibold text-[clamp(1.8rem,4vw,2.5rem)] leading-[3.3rem] md:leading-[3.5rem]">
				If you liked my profile and want me to be part of your team, here is
				how you can contact me. Thanks in advance!
			</h2>
			<div className="flex flex-1 flex-wrap gap-4 pb-4 justify-center items-center">
				<ContactButtonComponent>
					<span>thiagofernandosouza20@gmail.com</span>
				</ContactButtonComponent>
				<ContactButtonComponent>
					<span>+55 11 99398-5592</span>
				</ContactButtonComponent>
				<ContactButtonComponent>
					<IoLogoInstagram />
					<span>@thirraz</span>
				</ContactButtonComponent>
				<ContactButtonComponent>
					<FaLinkedinIn />
					<span>Thiago Morais</span>
				</ContactButtonComponent>
				<ContactButtonComponent>
					<FaBluesky />
					<span>@thirraz.bsky.social</span>
				</ContactButtonComponent>
				<ContactButtonComponent>
					<FaGithub />
					<span>/thirraz</span>
				</ContactButtonComponent>
			</div>
		</AnimatedBorder>
	)
}

export default ContactSection
