import { useEffect } from "react"
import AboutMeSection from "./components/about-me-section/AboutMeSection"
import ContactSection from "./components/contact-section/ContactSection"
import ContentContainer from "./components/containers/ContentContainer"
import HeadingComponent from "./components/profile-section/HeadingComponent"
import ProfileGrid from "./components/profile-section/ProfileGrid"
import ProjectsGrid from "./components/projects-section/ProjectsGrid"
import Lenis from "lenis"

function App() {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return (
		<div className="min-h-dvh bg-gradient-to-b from-purple-950 to-purple-900 font-sans py-28 ">
			<ContentContainer>
				<HeadingComponent />
				<ProfileGrid />
				<ProjectsGrid />
				<AboutMeSection />
				<ContactSection />
			</ContentContainer>
		</div>
	)
}

export default App
