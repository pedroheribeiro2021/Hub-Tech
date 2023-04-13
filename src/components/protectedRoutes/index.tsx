import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext"

export const ProtectedRoutes = () => {
    
    const { user, setCurrentRoute } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            const path = window.location.pathname
            if(path !== '/'){
                setCurrentRoute(path)
            }
            navigate('/')
        }
    }, [])

    return (
        <>
            {user && <Outlet/> }
        </>
    )
}