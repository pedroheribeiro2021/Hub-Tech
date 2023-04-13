import { AxiosError } from 'axios';
import { ReactNode, useContext } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify';
import { api } from '../services/api'

interface iApiError {
    message: string;
}

interface iTechProps {
    children: ReactNode;
}

interface iDataTech {
    title: string;
    status: string;
}

interface iTechContext {
    // data: iDataTech;
    registerTechs: (data: iDataTech) => void;
}

export const TechContext = createContext <iTechContext> ({} as iTechContext)

export const TechProvider = ({children}: iTechProps) => {

    const registerTechs = (data: iDataTech) => {

        const token = localStorage.getItem('@token')

        try {
           api.post(`/users/techs`, data, {
            headers: {Authorization:'Bearer ' + token}
           })
        } catch (error) {
            const requestError = error as AxiosError<iApiError>
            console.log(error)
            toast.error(requestError.response?.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    }

    return (
        <TechContext.Provider value={{ registerTechs}}>
            {children}
        </TechContext.Provider>
    )
}

export const useTextContext = () => useContext(TechContext)