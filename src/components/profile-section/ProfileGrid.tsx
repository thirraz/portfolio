import { FaUser } from "react-icons/fa"
import { IoChatbubble, IoCodeSlashOutline } from "react-icons/io5"
import ProfileCard from "./ProfileCardComponent"
import ProfilePicComponent from "./ProfilePicComponent"
import GridContainer from "../containers/GridContainer"

const profileInfos = [
	{
		title: "projects",
		icon: <IoCodeSlashOutline />,
		className: "text-black bg-white",
		link: "https://thiagomorais.netlify.app/#projects"
	},
	{
		title: "about me",
		icon: <FaUser />,
		className: "md:col-span-2 text-white bg-gray-900",
		link: "https://thiagomorais.netlify.app/#about-me"
	},
	{
		title: "contact",
		icon: <IoChatbubble />,
		className: "md:col-span-2 bg-purple-500 text-pink-400 flex items-end",
		link: "https://thiagomorais.netlify.app/#contact"
	}
]

function ProfileGrid() {
	return (
		<GridContainer>
			{profileInfos.map(({ link, title, icon, className }, i) => (
				<ProfileCard
					key={i}
					link={link}
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
