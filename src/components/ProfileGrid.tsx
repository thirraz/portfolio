import { IoChatbubble, IoCodeSlashOutline } from "react-icons/io5"
import ProfileCard from "./ProfileCardComponent"
import ProfilePic from "./ProfilePicComponent"
import { FaUser } from "react-icons/fa"
import GridContainer from "./GridContainer"

const profileInfos = [
	{
		title: "projects",
		icon: <IoCodeSlashOutline />,
		className: "text-black bg-white"
	},
	{
		title: "about me",
		icon: <FaUser />,
		className: "md:col-span-2 text-white bg-gray-900"
	},
	{
		title: "contact",
		icon: <IoChatbubble />,
		className: "md:col-span-2 bg-purple-500 text-pink-400 flex items-end"
	}
]

function ProfileGrid() {
	return (
		<GridContainer>
			{profileInfos.map(({ title, icon, className }, i) => (
				<ProfileCard
					key={i}
					title={title}
					icon={icon}
					className={className}
				/>
			))}

			<ProfilePic className="place-self-center row-start-1 md:col-start-3 md:row-start-2 " />
		</GridContainer>
	)
}

export default ProfileGrid
