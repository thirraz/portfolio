import ContentContainer from "./components/ContentContainer"
import HeadingComponent from "./components/HeadingComponent"
import ProfileGrid from "./components/profile-section/ProfileGrid"
import ProjectsGrid from "./components/projects-section/ProjectsGrid"

function App() {
	return (
		<div className="min-h-dvh bg-gradient-to-b from-purple-950 to-purple-900 font-sans">
			<ContentContainer>
				<HeadingComponent />
				<ProfileGrid />
				<ProjectsGrid />
			</ContentContainer>
		</div>
	)
}

export default App
