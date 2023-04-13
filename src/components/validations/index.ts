import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Informe um E-mail válido'),
    password: yup
    .string()
    //mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo
    .matches(/.{8,}/, 'Deve ter no minimo 8 caracteres')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .required('Senha obrigatória'),
    passwordConfirm: yup
    .string()
    .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser identica a senha'
    ),
    bio: yup.string().required('Bio obrigatória'),
    contact: yup.string().required('Contato obrigatório'),
    course_module: yup.string().required('Módulo obrigatório'),
})