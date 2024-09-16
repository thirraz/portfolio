import { useTranslation } from "react-i18next"
import Skills from "./SkillsComponent"
import { useState } from "react"

function HeadingComponent() {
	const [portuguese, setPortuguese] = useState(true)

	const {
		i18n: { changeLanguage, language }
	} = useTranslation()

	const [currLanguage, setCurrLanguage] = useState<string>(language)

	const handleChangeLanguage = () => {
		const newLanguage = currLanguage === "en" ? "pt" : "en"
		changeLanguage(newLanguage)
		setCurrLanguage(newLanguage)
	}

	return (
		<div className="text-white mb-8 space-y-8 md:space-y-0">
			<div className="flex justify-between items-center">
				<h1 className="font-serif text-[clamp(2rem,10vw,4rem)] font-semibold italic">
					Thiago Morais
				</h1>
				<div className="flex items-center gap-4 min-w-max text-sm">
					<span>pt-br</span>
					<button
						onClick={() => {
							handleChangeLanguage()
							setPortuguese(isPortuguese => !isPortuguese)
						}}
						className={`bg-purple-500 text-black w-14 h-7 rounded-full font-bold relative flex items-center px-1 transition-all duration-500 justify-${portuguese ? "start" : "end"} `}
					>
						<span className="h-6 w-7 rounded-full bg-white block" />
					</button>
					<span>eng</span>
				</div>
			</div>

			<Skills />
		</div>
	)
}

export default HeadingComponent
