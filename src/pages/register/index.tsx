import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { RegisterStyle } from '../../components/styles/registerStyle'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { RegisterSchema } from '../../components/validations'

interface iDataRegister {
    email: string;
    password: string;
    passwordConfirm: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string
}

export const Register = () => {

    const { userRegister } = useContext(UserContext)

    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm<iDataRegister>({
        resolver: yupResolver(RegisterSchema)
    })

    const submit = async (data: iDataRegister) => {
        userRegister(data)
    }

    return (
        <RegisterStyle>
            <div>
                <h2>Kenzie Hub</h2>
                <Link to={'..'} relative='path' >Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Crie sua conta</h3>
                <span>Rápido e gráits, vamos nessa?!</span>            
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Digite aqui seu nome" {...register('name')} />
                <p>{errors.name?.message}</p>
                <label htmlFor="">Email</label>
                <input type="email" id="email" placeholder="Digite aqui seu Email" {...register('email')} />
                <p>{errors.email?.message}</p>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite aqui seu Senha" {...register('password')} />
                <p>{errors.password?.message}</p>
                <label htmlFor="passwordConfirm">Confirmar senha</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Digite aqui seu senha" />
                <p>{errors.passwordConfirm?.message}</p>
                <label htmlFor="bio">Bio</label>
                <input type="text" id="bio" placeholder="Fale sobre você" {...register('bio')} />
                <p>{errors.bio?.message}</p>
                <label htmlFor="contact">Contato</label>
                <input type="tel" id="contact" placeholder="Digite aqui seu telefone" {...register('contact')} />
                <p>{errors.contact?.message}</p>
                <label htmlFor="course_module">Selecionar módulo</label>
                <select id="course_module" {...register('course_module')}>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                <p>{errors.course_module?.message}</p>
                <button type='submit'>Cadastrar</button>
            </form>
        </RegisterStyle>
    )
}