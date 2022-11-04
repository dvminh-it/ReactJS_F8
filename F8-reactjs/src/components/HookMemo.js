import { useState, useRef, useMemo } from 'react'
/*
Tránh thực hiện lại một logic nào đó không cần thiết
*/
function HookMemo() {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [products, setProducts] = useState([])
	const nameRef = useRef()

	const handleAdd = () => {
		setProducts([...products, { name, price: +price }])
		setName('')
		setPrice('')
		nameRef.current.focus()
	}

	const total = useMemo(() => {
		var total = products.reduce(
			(total, product) => total + product.price,
			0,
		)
		return total
	}, [products])

	return (
		<>
			<div className="row">
				<div className="collumn">
					<input
						ref={nameRef}
						style={{
							marginBottom: '10px',
						}}
						placeholder="Enter name.."
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<br />
					<input
						placeholder="Enter price.."
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<br />
					<button onClick={handleAdd}>Add</button>
				</div>
				<div className="collumn">
					<ul>
						{products.map((item, index) => (
							<li key={item.index}>
								{`Name: ${item.name} -  Price: ${item.price}`}
							</li>
						))}
					</ul>
				</div>
			</div>

			<h3>Total price: {total}</h3>
		</>
	)
}

export default HookMemo
