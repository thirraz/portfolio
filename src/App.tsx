import ContentContainer from "./components/ContentContainer"
import Heading from "./components/Heading"
import ProfileGrid from "./components/ProfileGrid"
import ProjectsGrid from "./components/ProjectsGrid"

function App() {
	return (
		<div className="min-h-dvh bg-gradient-to-b from-purple-950 to-purple-900 font-sans">
			<ContentContainer>
				<Heading />
				<ProfileGrid />
				<ProjectsGrid />
			</ContentContainer>
		</div>
	)
}

export default App
