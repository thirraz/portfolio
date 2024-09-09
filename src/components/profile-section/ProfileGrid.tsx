import { FaUser } from "react-icons/fa"
import { IoChatbubble, IoCodeSlashOutline } from "react-icons/io5"
import ProfileCard from "./ProfileCardComponent"
import ProfilePicComponent from "./ProfilePicComponent"
import GridContainer from "../containers/GridContainer"

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

			<ProfilePicComponent />
		</GridContainer>
	)
}

export default ProfileGrid
