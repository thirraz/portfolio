type Props = {
	icon: React.ReactNode
	title: string
	link: string
}

function ContactButtonComponent({ icon, title, link }: Props) {
	return (
		<a
			href={link}
			target="_blank"
			className="text-base flex items-center gap-2 px-3 py-1 border border-white rounded-full hover:bg-white hover:border-0 hover:text-gray-950 hover:-translate-y-1 duration-200"
		>
			<span>{icon}</span> {title}
		</a>
	)
}

export default ContactButtonComponent
