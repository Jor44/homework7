import { useState } from "react";
import { useForm } from "react-hook-form";
import { Users } from "../pages/users";


export const Header = ({ list, setList }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeSurname = (e) => {
        setSurname(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const addList = () => {
        if (name && surname && email !== '') {
            setList([...list, { name: name, surname: surname, email: email, id: Math.random() }]);
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("example", { required: true })} onChange={changeName} type="text" />
                <input {...register("example1", { required: true })} onChange={changeSurname} type="text" />
                <input {...register("example2", { required: true })} onChange={changeEmail} type="text" />

                {(errors.example || errors.example1 || errors.example2) && <span> all inputs must be filled out</span>}

                <input type="submit" value="ADD" onClick={addList} className="add-btn" />
            </div>
        </form>
    )
}