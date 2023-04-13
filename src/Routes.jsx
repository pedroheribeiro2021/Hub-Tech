import { Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "./components/protectedRoutes"
import { Dashboard } from "./pages/dashboard"
import { Login } from "./pages/login"
import { Register } from "./pages/register"



export const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<ProtectedRoutes />}>
                <Route index element={<Dashboard/>}/>
            </Route>
      </Routes>
    )
}