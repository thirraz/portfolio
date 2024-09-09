import AnimatedBorder from "../AnimatedBorder"

function ContactSection() {
	return (
		<AnimatedBorder className="h-fit text-center md:text-left ">
			<h2 className="font-serif font-semibold text-[clamp(1.8rem,4vw,2.5rem)]">
				If you liked my profile and want me to be part of your team, here is
				how you can contact me. Thanks in advance!
			</h2>
			<div>
				<p className="px-2 py-1 border border-white rounded-full">
					thiagofernandosouza20@gmail.com
				</p>
			</div>
		</AnimatedBorder>
	)
}

export default ContactSection
