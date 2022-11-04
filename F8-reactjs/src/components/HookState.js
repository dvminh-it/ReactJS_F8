import { useState } from 'react'

function HookState() {
	document.title = 'Hooks State'

	const gifts = [
		{ id: 1, name: 'cpu' },
		{ id: 2, name: 'memory' },
		{ id: 3, name: 'disk' },
	]

	const [checked, setChecked] = useState(1)
	const handleSubmitRadio = () => {
		console.log(gifts.filter((item) => item.id === checked)[0].name)
	}

	const [checkbox, setCheckbox] = useState([])
	const handleCheckBox = (id) => {
		setCheckbox((pre) => {
			const isCheckBox = checkbox.includes(id)
			if (isCheckBox) {
				return checkbox.filter((item) => item !== id)
			} else {
				return [...pre, id]
			}
		})
	}
	const handleSubmitCheckBox = () => {
		var listBox = []
		checkbox.map((id) => {
			var name = gifts.filter((item) => item.id === id)[0].name
			return (listBox = [...listBox, name])
		})
		console.log(listBox)
	}

	// Get from local storage and convert to array
	const [job, setJob] = useState('')
	const [jobs, setJobs] = useState(() => {
		const storageJobs = JSON.parse(localStorage.getItem('jobs'))
		return storageJobs ?? []
	})
	const handleAdd = () => {
		setJobs((pre) => {
			const newJobs = [...pre, job]
			// Save to the local storage
			const jsonJobs = JSON.stringify(newJobs)
			localStorage.setItem('jobs', jsonJobs)
			return newJobs
		})
		setJob('')
	}
	const handleDelete = () => {
		setJobs((pre) => {
			var newJobs = pre.filter((item) => item !== job)
			// Save to the local storage
			const jsonJobs = JSON.stringify(newJobs)
			localStorage.setItem('jobs', jsonJobs)
			return newJobs
		})
		setJob('')
	}
	return (
		<div style={{ marginTop: 20 }}>
			<div className="row">
				<div className="column">
					<input
						style={{
							marginBottom: 11,
						}}
						value={job}
						onChange={(e) => setJob(e.target.value)}
					/>{' '}
					<br></br>
					<button onClick={handleAdd}>Add </button>
					<button onClick={handleDelete}>Delete </button>
				</div>
				<div className="column">
					<ul>
						{jobs.map((job, index) => (
							<li key={index}>{job}</li>
						))}
					</ul>
				</div>
			</div>{' '}
			<hr />
			<div className="row">
				<div className="column">
					<h1 style={{ margin: 0 }}>Radio button</h1>
					{gifts.map((gift) => (
						<div key={gift.id}>
							<input
								type="radio"
								checked={gift.id === checked}
								onChange={() => setChecked(gift.id)}
							/>
							{gift.name}
						</div>
					))}
					<button onClick={handleSubmitRadio}>Submit</button>
				</div>
				<div className="column">
					<h1 style={{ margin: 0 }}>Checkbox button</h1>
					{gifts.map((gift) => (
						<div key={gift.id}>
							<input
								type="checkbox"
								checked={checkbox.includes(gift.id)}
								onChange={() => handleCheckBox(gift.id)}
							/>
							{gift.name}
						</div>
					))}
					<button onClick={handleSubmitCheckBox}>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default HookState
