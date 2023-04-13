import { DashboardStyle } from "../../components/styles/dashboardSyle"
import { api } from "../../services/api"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ReactModal from "react-modal"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { TechContext } from "../../context/techContext"
const trash = require('../../assets/Vector.png')

interface iUser {
    id: string,
	name: string,
	email: string,
	course_module: string,
	bio: string,
	contact: string,
	techs: [],
	works: [],
}

interface iDataTech {
    title: string;
    status: string;
}

interface iTechs {
    id: string;
    title: string;
    status: string;
    created_at: string;
    updated_at: string;
}



const formSchema = yup.object().shape({
    title: yup.string().required('Nome da tecnologia é obrigatório'),
    status: yup.string().required('status obrigatório')
})

export const Dashboard = () => {

    const { registerTechs } = useContext(TechContext)

    const [user, setUser] = useState<iUser | null>(null)

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm <iDataTech> ({
        resolver: yupResolver(formSchema)
    })

    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
  
    const closeModal = () => setIsOpen(false)


    const navigate = useNavigate()

    const logOut = () => {
        setUser(null)
        localStorage.clear()
        navigate('/')
    }

    const [loading, setLoading] = useState(false)
    const [techs, setTechs] = useState <iTechs[]>([])

    useEffect(() => {

        const id = localStorage.getItem('@id')

        const getUser = async () => {
            try {
                setLoading(true)
                 const response = await api.get(`/users/${id}`)
                .then((resp) => {
                    setUser(resp.data)
                    setTechs(resp.data.techs)
                })
                return response
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)  
            }
        }
        getUser()
    }, [techs])

    const submit = (data: iDataTech) => {
        registerTechs(data)
        closeModal()
    }

    const removeTechs = async (id: string) => {
        const techDelete = techs.filter(tech => tech.id !== id)

        const token = localStorage.getItem('@token')

        await api.delete(`/users/techs/${id}`, {
            headers: {Authorization:'Bearer ' + token}
        })
    }

    return (
        <DashboardStyle>
        <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="modal-content"
        >
            <div>
                <div className="head">
                    <h2>Cadastrar Tecnologia</h2>
                    <span onClick={closeModal} > X </span>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="">Nome</label>
                    <input placeholder="Digite sua tecnologia" type="text" {...register('title')} />
                    <p>{errors.title?.message}</p>
                    <label htmlFor="">Selecionar status</label>
                    <select id="status" {...register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <p>{errors.status?.message}</p>
                    <button className="btn1" type="submit">Cadastrar tecnologia</button>
                </form>
            </div>
        </ReactModal>
            <header>
                <h2>Kenzie Hub</h2>
                <button onClick={logOut}>Sair</button>
            </header>
            <div className="apresentation">
                <h3>Olá, {user?.name} </h3>
                <span> {user?.course_module} </span>
            </div>
            <div className="techs">
                <div>
                    <h3>Tecnologias</h3>
                    <button onClick={openModal}>+</button>
                </div>
                <ul>
                    {
                        techs.length ? (
                        techs.map((techs, i) => 
                        <li key={i} >
                            <h3> {techs.title} </h3>
                            <span> {techs.status} </span>
                            <img src={trash} alt="" id={techs.id} onClick={() => removeTechs(techs.id)} />
                        </li>
                        )
                        ) : (
                            <li></li>
                        )
                    }
                </ul>
            </div>
        </DashboardStyle>
    )
    
}