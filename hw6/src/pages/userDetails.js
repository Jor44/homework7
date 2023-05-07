import {useParams} from "react-router"; 

export const UserDetails = ({list}) => {
    const params = useParams()

    const currentUser = list.find((i)=> i.id === params.id)
    return (
        <>
            <h1>{currentUser.name} {currentUser.surname} {currentUser.email}</h1>
        </>
    )
}