import { createContext, ReactNode, useContext, useState } from "react"

type Language = "en" | "pt-BR" | null

type LanguageContextType = {
	language: Language | null
	setLanguage: React.Dispatch<React.SetStateAction<Language | null>>
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

type UserContextProviderProps = {
	children: ReactNode
}

export const LanguageContextProvider = ({
	children
}: UserContextProviderProps) => {
	const [language, setLanguage] = useState<Language>("pt-BR")

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

//eslint-disable-next-line
export const useLanguageContext = () => {
	const context = useContext(LanguageContext)

	if (!context)
		throw new Error(
			"useLanguageContext must be used within a LanguageContextProvider"
		)

	return context
}
