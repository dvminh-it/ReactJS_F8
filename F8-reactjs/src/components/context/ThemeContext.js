import { useState, createContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('dark')

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
		console.log(
			'🚀 ~ file: ThemeContext.js ~ line 10 ~ toggleTheme ~ theme',
			theme,
		)
	}

	const value = {
		theme,
		toggleTheme,
	}

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	)
}

export { ThemeContext }

export default ThemeProvider
