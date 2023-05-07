import { useNavigate } from "react-router"

export const Landing = () => {
    const navigate = useNavigate()

    const firstClick = () => {
        navigate('/login')
    }

    return (
        <div>
            <button className="firstBtn" onClick={firstClick}>Click to continue</button>
        </div>
    )
}