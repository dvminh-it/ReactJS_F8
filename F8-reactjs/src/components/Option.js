import { useState, useEffect } from 'react'
import components from './'

/* 
memo: Tránh components render khi không cần thiết, khi 1 props thay đổi sẽ render 
useCallback: thường sử dụng với memo, nếu không có thì không dùng

1. memo() -> Higher Order Components (HOC)
2. useCallback() 
	- Render types
	- React memo
*/

function Option() {
	const pages = [
		'Home Page',
		'Hook Effect',
		'Hook Ref',
		'Hook State',
		'Hook Memo',
		'Hook Reducer',
		'Hook Context',
	]
	const [toggle, setToggle] = useState(false)
	const [page, setPage] = useState('Home Page')

	function switchPages(page) {
		switch (page.replace(/\s+/g, '')) {
			case 'HookRef':
				return <components.HookRef />
			case 'HookEffect':
				return <components.HookEffect />
			case 'HookState':
				return <components.HookState />
			case 'HookMemo':
				return <components.HookMemo />
			case 'HookReducer':
				return <components.HookReducer />
			case 'HookContext':
				return //<components.HookContext />

			default:
				return <components.HomePage />
		}
	}

	const onChange = (e) => {
		setToggle(e.target.value)
		console.log('Change page: ', e.target.value)
	}

	const hanldeSubmit = () => {
		setPage(toggle)
	}

	useEffect(() => {
		//console.log(`Toggle: ${toggle} Pages: ${page}`)
		pages.map((item) =>
			item.replace(/\s+/g, '') === page ? (document.title = item) : null,
		)
	})

	return (
		<div style={{ marginLeft: 20 }}>
			<label>
				Enter your selection:
				<select
					style={{
						marginLeft: 20,

						marginRight: 20,
					}}
					value={toggle || page}
					onChange={(e) => onChange(e)}>
					{pages.map((page, i) => {
						return (
							<option key={i} value={page.replace(/\s+/g, '')}>
								{page}
							</option>
						)
					})}
				</select>
			</label>
			<button onClick={hanldeSubmit}>Submit</button> <hr></hr>
			{switchPages(page)}
		</div>
	)
}

export default Option
