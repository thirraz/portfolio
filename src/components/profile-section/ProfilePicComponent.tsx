import { twMerge } from "tailwind-merge"
import profilePic from "../../assets/imgs/profile_pic.jpeg"

type Props = {
	className?: string
}

function ProfilePicComponent({ className }: Props) {
	return (
		<img
			className={twMerge("rounded-full object-cover w-56 h-56", className)}
			src={profilePic}
			alt="Thiago Souza's profile pic"
		/>
	)
}

export default ProfilePicComponent
