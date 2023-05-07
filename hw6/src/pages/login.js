import { useState } from "react"
import { useNavigate } from "react-router";

export const Login = () => {
    const [firstname, setFirstname] = useState();
    const [pass, setPass] = useState();
    const navigation = useNavigate()

    const handleClick = () => {
        if (firstname === 'admin' && pass === 'admin') {
            navigation('/users')
        }
        else {
            alert('wrong login or password')
        }
    }

    const changeName = (e) => {
        setFirstname(e.target.value)
    }

    const changePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="list-div">
                <input required={true} onChange={changeName} type="text" placeholder="userName" />
                <input required={true} onChange={changePass} type="password" placeholder="password" />
                <button type="submit" className="login-btn" onClick={handleClick}>Log in</button>
            </div>
        </form>
    )
}