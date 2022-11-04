import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
	const themeContext = useContext(ThemeContext)
	console.log('day la context');
	return (
		<h4 className={themeContext.theme}>
			Here is {themeContext.theme} theme
		</h4>
	)
}

export default Paragraph
