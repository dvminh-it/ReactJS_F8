import Paragraph from './context/Paragraph'
import { useContext } from 'react'
import ThemeProvider, { ThemeContext } from './context/ThemeContext'
/*
CompA => CompB => CompC

1. Create a context
2. Provider
3. Consumer
*/

function HookContext() {
	const themeContext = useContext(ThemeContext)
	return (
		<>
			<ThemeProvider>
				<button onClick={themeContext.toggleTheme}>Toggle</button>
				<Paragraph />
			</ThemeProvider>
		</>
	)
}

export default HookContext
