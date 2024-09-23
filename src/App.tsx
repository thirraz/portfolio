import AboutMeSection from "./components/about-me-section/AboutMeSection"
import ContactSection from "./components/contact-section/ContactSection"
import ContentContainer from "./components/containers/ContentContainer"
import HeadingComponent from "./components/profile-section/HeadingComponent"
import ProfileGrid from "./components/profile-section/ProfileGrid"
import ProjectsGrid from "./components/projects-section/ProjectsGrid"
import { useLanguageContext } from "./contexts/LanguageContext"

function App() {
	const { language, setLanguage } = useLanguageContext()

	const handleLangChanging = () =>
		setLanguage(currLang => (currLang == "en" ? "pt-BR" : "en"))

	console.log(language)

	return (
		<div className="min-h-dvh bg-gradient-to-b from-purple-950 to-purple-900 font-sans">
			{/* <LanguageSelector /> */}
			<button
				onClick={handleLangChanging}
				className="fixed top-2 right-4 z-50 bg-purple-500 text-white font-bold px-7 py-4 rounded-lg"
			>
				Change Language
			</button>
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
