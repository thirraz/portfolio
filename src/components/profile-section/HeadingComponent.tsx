import { twMerge } from "tailwind-merge"
import { useLanguageContext } from "../../contexts/LanguageContext"

import Skills from "./SkillsComponent"
import BRFlag from "../../assets/imgs/brazil_flag.png"
import USAFlag from "../../assets/imgs/usa_flag.png"

function HeadingComponent() {
	const { language, setLanguage } = useLanguageContext()
	const className = language == "pt-BR" ? "left-0" : "right-0"

	const handleLangChanging = () =>
		setLanguage(currLang => (currLang == "en" ? "pt-BR" : "en"))

	return (
		<div className="text-white mb-8 space-y-8 md:space-y-0">
			<div className="flex items-center justify-between">
				<h1 className="font-serif text-[clamp(2rem,10vw,4rem)] font-semibold italic">
					Thiago Morais
				</h1>

				<div className="flex items-center justify-around  w-48 ">
					<img src={BRFlag} alt="Brazil's flag icon" />
					<button
						onClick={handleLangChanging}
						className="relative bg-[#3d2f5f] text-white font-bold w-14 h-4 rounded-full "
					>
						<span
							className={twMerge(
								"absolute right-0 -top-1 w-6 h-6 rounded-full bg-white transition-all",
								className
							)}
						/>
					</button>
					<img src={USAFlag} alt="USA's flag icon" />
				</div>
			</div>

			<Skills />
		</div>
	)
}

export default HeadingComponent
