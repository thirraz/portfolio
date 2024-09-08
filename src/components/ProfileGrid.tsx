import { IoChatbubble, IoCodeSlashOutline } from "react-icons/io5"
import ProfileCard from "./ProfileCard"
import ProfilePic from "./ProfilePic"
import { FaUser } from "react-icons/fa"

function ProfileGrid() {
	return (
		<div className="grid min-h-fit md:[grid-template-columns:1fr_6rem_1fr] md:grid-rows-2 gap-4 ">
			<ProfileCard
				title="projects"
				icon={<IoCodeSlashOutline />}
				className="text-black bg-white"
			/>
			<ProfileCard
				title="about me"
				icon={<FaUser />}
				className="md:col-span-2 text-white bg-gray-900"
			/>
			<ProfileCard
				title="contact"
				icon={<IoChatbubble />}
				className="md:col-span-2 bg-purple-500 text-pink-400 flex items-end"
			/>

			<ProfilePic className="place-self-center row-start-1 md:col-start-3 md:row-start-2 " />
		</div>
	)
}

export default ProfileGrid
