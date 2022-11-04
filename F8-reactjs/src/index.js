import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './App.css'
import ThemeProvider from './components/context/ThemeContext'
import { StoreProvider } from './store'

function fakeComments(id) {
	setInterval(() => {
		window.dispatchEvent(
			new CustomEvent(`load-${id}`, {
				detail: `comments at ${id}: `,
			}),
		)
	}, 2000)
}
// fakeComments(1)
// fakeComments(2)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.Fragment>
		<StoreProvider>
			<App />
		</StoreProvider>
	</React.Fragment>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
