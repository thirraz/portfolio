import profilePic from "../../assets/imgs/profile_pic.jpeg"

function ProfilePicComponent() {
	return (
		<img
			className="relative rounded-full object-cover w-56 h-56 place-self-center row-start-1 md:col-start-3 md:row-start-2 select-none pointer-events-none"
			src={profilePic}
			alt="Thiago Souza's profile pic"
		/>
	)
}

export default ProfilePicComponent
