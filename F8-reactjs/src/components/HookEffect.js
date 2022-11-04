import { useEffect, useState } from 'react'
// useEffect Sử dụng khi tác động làm thay đổi dữ liệu

/* Kiến thức cần nắm vững:
	- EventsL Add / Remove event listner
	- Observer pattern: Subcribe / Unsubscribe
	- Closure 
	- Timer: setInterval, setTimeout, clearInterval, clearTimeout
	- useState
	- Mounted/ Unmounted
	- ===
	- Call API

1. Update DOM
	- F8 blog title
2. Call API
3. Listen DOM events
	- Scroll
	- Resize
4. Cleanup
	- Remove listner / Unsubcribe 
	- Clear timer
*/

/* Phân loại
1. useEffect(CallBack)
	- Gọi CallBack mỗi khi component re-render
	- Gọi CallBack sau khi component thêm element vào DOM

2. useEffect(CallBack, [])
	- Chỉ gọi CallBack 1 lần sau khi component mounted

3. useEffect(CallBack, [deps])
	- Callback sẽ được gọi lại mỗi khi deps thay đổi

Áp dụng chung:
	1. CallBack luôn được gọi sau khi component mounted
	2. Cleanup function luôn được gọi trước khi component unMounted
	3. Cleanup function luôn được gọi trước khi CallBack được gọi (trừ lần mounted)
*/

/* useEffect và useLayoutEffect
useEffect: 
	1. Cập nhật lại state
	2. Cập nhật lại DOM (mutated)
	3. Render lại UI
	4. Gọi lại cleanup nếu deps thay đổi
	5. Gọi lại useEffect callback
useLayoutEffect:
	1. Cập nhật lại state
	2. Cập nhật DOM (mutated)
	3. Gọi cleanup nếu deps thay đổi
	4. Gọi useLayoutEffect callback (sync)
	5. Render lại UI
*/

const tabs = ['posts', 'comments', 'albums']

function HookEffect() {
	const [type, setType] = useState('posts')
	const [posts, setPosts] = useState([])
	const [showToTop, setShowToTop] = useState(false)
	const [avatar, setAvatar] = useState()
	const [id, setId] = useState(1)

	// useEffect dependent
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => setPosts(posts))
	}, [type])

	// Events scroll
	useEffect(() => {
		const handleScroll = () => {
			setShowToTop(window.scrollY >= 200)
		}
		window.addEventListener('scroll', handleScroll)
		// Cleanup function
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	// Effect avatar
	useEffect(() => {
		// Cleanup function
		return () => {
			avatar && URL.revokeObjectURL(avatar.preview)
		}
	}, [avatar])

	const handleAvatar = (e) => {
		const file = e.target.files[0]
		file.preview = URL.createObjectURL(file)
		setAvatar(file)
	}

	useEffect(() => {
		const handleComment = ({ detail }) => {
			console.log(detail)
		}
		id <= 2
			? window.addEventListener(`load-${id}`, handleComment)
			: console.log(`Not comments with id ${id}`)
		return () => {
			window.removeEventListener(`load-${id}`, handleComment)
		}
	}, [id])

	return (
		<div>
			<h1>Content</h1>
			<input type="file" onChange={handleAvatar}></input>
			<br></br>
			{avatar && (
				<img src={avatar.preview} alt="avatar" width="30%" style={{
					top: 65,
					right: 20,
				}}></img>
			)}

			<br></br>
			{tabs.map((tab, i) => (
				<button
					key={i}
					style={
						type === tab
							? {
								background: '#66ffff',
							}
							: {}
					}
					onClick={() => setType(tab)}>
					{tab}
				</button>
			))}
			<ul>
				{posts.slice(0, 50).map((post) => (
					<li
						key={post.id}
						onClick={() => {
							console.log(`ID changed:  ${post.id}`)
							return setId(post.id)
						}}>
						{post.title || post.name}
					</li>
				))}
			</ul>

			{showToTop && (
				<button
					style={{
						position: 'fixed',
						bottom: 20,
						right: 20,
					}}
					onClick={() =>
						window.scrollTo({
							top: 0,
						})
					}>
					Go to top
				</button>
			)}
		</div>
	)
}
export default HookEffect
