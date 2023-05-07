import {useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export const Users = () => {
    const [list, setList] = useState([{ name: 'name1', surname: 'surname1', email: 'email@1', id: '1' },
    { name: 'name2', surname: 'surname2', email: 'email@2', id: Math.random() },
    { name: 'name3', surname: 'surname3', email: 'email@3', id: Math.random() },
    { name: 'name4', surname: 'surname4', email: 'email@4', id: Math.random() },
    { name: 'name5', surname: 'surname5', email: 'email@5', id: Math.random() },
    { name: 'name6', surname: 'surname6', email: 'email@6', id: Math.random() },
    { name: 'name7', surname: 'surname7', email: 'email@7', id: Math.random() },
    { name: 'name8', surname: 'surname8', email: 'email@8', id: Math.random() }]);

    const handleDel = (id) => {
        const newList = list.filter((i) => i.id !== id)
        setList(newList)
    }

    return (
        <div className="list-div">
            <Header list={list} setList={setList} />
            <div className="top-list"><p>Name</p> <p>Surname</p> <p>Email</p></div>
            {
                list.map((i, k) => {
                    return (
                        <div className="line" key={i.id}>

                            <Link to={`/user-details/${i.id}`}>
                                <button className="list-btn"><p>{i.name}</p>
                                    <p>{i.surname}</p> <p>{i.email}</p></button></Link>
                            <button onClick={() => handleDel(i.id)} className="del-btn">Delete item</button>
                        </div>
                    )
                })
            }
        </div>
    )
}