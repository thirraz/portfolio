import { twMerge } from "tailwind-merge"

type Props = {
	title: string
	icon: React.ReactNode
	className: string
}

function ProfileCardComponent({ title, icon, className }: Props) {
	return (
		<div
			className={twMerge(
				"text-xl h-56 rounded-xl hover:border-b hover:border-white hover:-translate-y-2 duration-200 hover:cursor-pointer",
				className
			)}
		>
			<div className="flex items-center justify-between px-8 py-5 w-full">
				<p className="tracking-wide">{title}</p>
				<span>{icon}</span>
			</div>
		</div>
	)
}

export default ProfileCardComponent
