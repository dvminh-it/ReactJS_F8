import { useState, useRef, useEffect } from 'react'

function HookRef() {
	const [count, setCount] = useState(60)
	const timerId = useRef()
	const preCount = useRef()
	const h1Ref = useRef() // Get element

	useEffect(() => {
		preCount.current = count
	}, [count])

	const handleStart = () => {
		if (timerId.current !== undefined) handleStop()
		timerId.current = setInterval(() => {
			setCount((preCount) => preCount - 1)
		}, 2000)
	}

	const handleStop = () => {
		clearInterval(timerId.current)
		timerId.current = undefined
	}

	console.log(`render ${count} precount ${preCount.current}`)
	return (
		<div style={{}}>
			<h1 ref={h1Ref}>userRef: {count}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	)
}

export default HookRef
