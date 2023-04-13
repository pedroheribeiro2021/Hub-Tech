import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { LoginStyle } from '../../components/styles/loginStyle'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
const eye = require('../../assets/eye.png')

interface iDataLogin {
    email: string;
    password: string;
}

const formSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória')
})

export const Login = () => {

    const { userLogin } = useContext(UserContext)

    const {
        register,
        handleSubmit,
      } = useForm<iDataLogin>({
        resolver: yupResolver(formSchema),
      })

    const submit = (data: iDataLogin) => {
        userLogin(data)
    }

    return (
        <LoginStyle>
            <h2>Kenzie Hub</h2>
            <form  onSubmit={handleSubmit(submit)}>
                <h3>Login</h3>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu E-mail" {...register('email')} />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Senha" {...register('password')} />
                <img src={eye} alt="" />
                <button className='btn1' type="submit">Entrar</button>
                <span>Ainda não possui uma conta?</span>
                <Link to={'/register'} relative='path'>Cadastre-se</Link>
            </form>
        </LoginStyle>
    )
}