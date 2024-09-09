type Props = { children: React.ReactNode }

function ContentContainer({ children }: Props) {
	return (
		<>
			<div className="px-3 max-w-[1300px] mx-auto">{children}</div>
		</>
	)
}

export default ContentContainer
