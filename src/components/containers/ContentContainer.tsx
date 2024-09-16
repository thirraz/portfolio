type Props = { children: React.ReactNode }

function ContentContainer({ children }: Props) {
	return <main className="px-3 max-w-[1200px] mx-auto">{children}</main>
}

export default ContentContainer
