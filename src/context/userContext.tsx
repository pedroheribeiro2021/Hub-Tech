import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AxiosError } from "axios"

interface iApiError {
    message: string;
}

interface iUserProps {
    children: ReactNode;
}

interface iUser {
    id: string;
	name: string;
	email: string;
	course_module: string;
	bio: string;
	contact: string;
	techs: [];
	works: [];
}

interface iDataLogin {
    email: string;
    password: string;
}

interface iDataRegister {
    email: string;
    password: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string
}

export interface iUserContext {
    user: iUser | null;
    setCurrentRoute: React.Dispatch<SetStateAction<string | null>>;
    userLogin: (data: iDataLogin) => void;
    userRegister: (data: iDataRegister) => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext)

export const UserProvider = ({children}: iUserProps) => {

    const [user, setUser] = useState<iUser | null>(null)
    const [currentRoute, setCurrentRoute] = useState<string | null>(null)

    const navigate = useNavigate()
    
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('@token')
            if(token){
                try {
                    const resp:iUser = await api.get(`/profile`, {
                        headers: {Authorization:'Bearer ' + token}
                    })
                    setUser(resp)
                    navigate('/dashboard')
                    console.log(resp)
                } catch (error) {
                    localStorage.removeItem('@token')
                    navigate('/')
                }
            }
        })()
    }, [])

    const userLogin = (data: iDataLogin) => {

        api.post(`/sessions `, data)
        .then((resp) => {
            console.log(resp.data.user)
            setUser(resp.data.user)
            localStorage.setItem('@token', resp.data.token)
            localStorage.setItem('@id', resp.data.user.id)
            navigate('/dashboard')
            toast.success('Login efetuado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
        .catch((err) => {
            console.log(err)
            toast.error('Erro de credenciais!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        })
    }


    const userRegister = async(data: iDataRegister) => {

        await api.post(`/users`, data)
        .then((resp) => {
            console.log(resp)
            toast.success('Cadastro efetuado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            navigate('/')
        })
        .catch((err) => {
            const requestError = err as AxiosError<iApiError>
            console.log(err)
            toast.error(requestError.response?.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        })
    }

    return (
        <UserContext.Provider value={{
        userLogin, 
        userRegister, 
        user,
        setCurrentRoute
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)