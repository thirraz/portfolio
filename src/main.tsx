import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { LanguageContextProvider } from "./contexts/LanguageContext.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<LanguageContextProvider>
			<App />
		</LanguageContextProvider>
	</StrictMode>
)
