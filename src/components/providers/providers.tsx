
import { ReactNode } from "react";
import { TechProvider } from "../../context/techContext";
import { UserProvider } from "../../context/userContext";

interface iProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: iProvidersProps) => {

    return (
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>
    )
}