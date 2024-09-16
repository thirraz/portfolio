import { twMerge } from "tailwind-merge"

type Props = {
	title: string
	icon: React.ReactNode
	className: string
	link: string
}

function ProfileCardComponent({ link, title, icon, className }: Props) {
	return (
		<a
			href={link}
			className={twMerge(
				"profile-card max-w-full text-xl h-56 rounded-xl hover:-translate-y-2 duration-200 hover:cursor-pointer overflow-clip relative",
				className
			)}
		>
			<div className="item-title flex items-center justify-between px-8 py-5 w-full">
				<p className="tracking-wide">{title}</p>
				<span>{icon}</span>
			</div>
			<div className="hidden-text absolute hidden gap-4 pl-4 text-4xl md:text-5xl min-w-max animate-marquee italic">
				<p aria-hidden="true">{title}</p>
				<p aria-hidden="true">{title}</p>
				<p aria-hidden="true">{title}</p>
				<p aria-hidden="true">{title}</p>
				<p aria-hidden="true">{title}</p>
				<p aria-hidden="true">{title}</p>
			</div>
		</a>
	)
}

export default ProfileCardComponent
