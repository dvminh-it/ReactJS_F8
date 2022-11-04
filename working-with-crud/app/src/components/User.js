import React from 'react';
import { Table, Button, Form, InputGroup, Pagination } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const DOMAIN = 'http://localhost:3001/';

const User = (props) => {
    const [person, setPerson] = React.useState({ name: '', age: '', id: '' })
    const [activePage, setActivePage] = React.useState(1)
    const [nameSearch, setNameSearch] = React.useState('')
    let listUsers = [], listButton = []

    for (let number = 1; number <= props.user.totalPages; number++) {
        listButton.push(
            <Pagination.Item key={number} active={number === props.user.activePage}
                onClick={() => {
                    nameSearch !== '' ? props.user.searchPaginateUser({
                        name: nameSearch
                    }) : props.user.paginateUser({ activePage: number })
                    setActivePage(number)
                }}>
                {number}
            </Pagination.Item>
        );
    }

    if (props.user.paginateUsers) {
        listUsers = props.user.paginateUsers.map(user => {
            return (<tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td><Button variant="danger" onClick={() =>
                    props.user.deleteUser({
                        id: user._id
                    })}>Delete</Button></td>
                <td><Button onClick={() => (setPerson({ ...person, name: user.name, age: user.age, id: user._id }))}>Edit</Button></td></tr>)
        })
    }

    const [show, setShow] = React.useState(false);
    // const itemSearch = (() => {
    //     if (!show) return []
    //     const newList = props.user.listUsers.map(value => value.name)
    //     return newList.filter(value =>
    //         value.toLowerCase().includes(nameSearch.toLowerCase()))
    //         .map((item, key) => (
    //             <Button key={key} onClick={() => {
    //                 setShow(false)
    //             }}>{item}</Button>))
    // })()
    const [test, setTest] = React.useState([])
    const itemSearch2 = (() => {
        if (!show) return []
        fetch(`${DOMAIN}search/?name=${nameSearch}`)
            .then((response) => response.json())
            .then((res) => { console.log('res',res);
                setTest(res.data)})
            ;
        console.log('test', typeof test);
        // const newList = props.user.listUsers.map(value => value.name)
        // return test.map((item, key) => (
        //     <Button key={key} onClick={() => {
        //         setShow(false)
        //     }}>{item}</Button>))
    })()
    return (
        <div style={{ padding: '20px' }}>
            <InputGroup >
                <Form.Control placeholder='Enter name' value={person.name}
                    onChange={e =>
                        setPerson({ ...person, name: e.target.value })} />
                <Form.Control placeholder='Enter age' value={person.age}
                    onChange={e =>
                        setPerson({ ...person, age: e.target.value })} />

                <Form.Control placeholder='Enter name search' value={nameSearch}
                    onFocus={() => setShow(true)}
                    onBlur={() => setTimeout(() => { setShow(false) }, 150)}
                    onChange={e => setNameSearch(e.target.value)} />
                <Button onClick={() => {
                    props.user.addUser({
                        name: person.name,
                        age: person.age
                    });
                    setPerson({ ...person, name: '', age: '' })
                }}>Add</Button>
                <Button onClick={() => {
                    props.user.updateUser({
                        name: person.name,
                        age: person.age,
                        id: person.id,
                        activePage: activePage
                    });
                    setPerson({ ...person, name: '', age: '' })
                }}>Update</Button>
                <Button onClick={() =>
                    props.user.searchPaginateUser({
                        name: nameSearch
                    })}>Search</Button>
            </InputGroup >

            <div className="list">{itemSearch2}</div><br></br>
            <Table striped bordered hover size="sm" className='text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers}
                </tbody>
            </Table>
            <Pagination>{listButton}</Pagination>

        </div>
    )
}

export default User