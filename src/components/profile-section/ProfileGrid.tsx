import { FaUser } from "react-icons/fa"
import { IoChatbubble, IoCodeSlashOutline } from "react-icons/io5"
import ProfileCard from "./ProfileCardComponent"
import ProfilePicComponent from "./ProfilePicComponent"
import GridContainer from "../containers/GridContainer"
import { useLanguageContext } from "../../contexts/LanguageContext"

import ptTranslations from "../../locale/pt.json"
import enTranslations from "../../locale/en.json"

function ProfileGrid() {
	const { language } = useLanguageContext()
	const profileInfos = () => [
		{
			title:
				language == "pt-BR"
					? ptTranslations.translation.profile[0]
					: enTranslations.translation.profile[0],
			icon: <IoCodeSlashOutline />,
			className: "text-black bg-white",
			link: "https://thiagomorais.netlify.app/#projects"
		},
		{
			title:
				language == "pt-BR"
					? ptTranslations.translation.profile[1]
					: enTranslations.translation.profile[1],
			icon: <FaUser />,
			className: "md:col-span-2 text-white bg-gray-900",
			link: "https://thiagomorais.netlify.app/#about-me"
		},
		{
			title:
				language == "pt-BR"
					? ptTranslations.translation.profile[2]
					: enTranslations.translation.profile[2],
			icon: <IoChatbubble />,
			className: "md:col-span-2 bg-purple-500 text-pink-400 flex items-end",
			link: "https://thiagomorais.netlify.app/#contact"
		}
	]

	return (
		<GridContainer>
			{profileInfos().map(({ link, title, icon, className }, i) => (
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
