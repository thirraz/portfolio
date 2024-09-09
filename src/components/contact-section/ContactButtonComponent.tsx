type Props = {
	children: React.ReactNode
}

function ContactButtonComponent({ children }: Props) {
	return (
		<button className="text-base flex items-center gap-2 px-3 py-1 border border-white rounded-full hover:bg-white hover:border-0 hover:text-gray-950 hover:-translate-y-1 duration-200">
			{children}
		</button>
	)
}

export default ContactButtonComponent
