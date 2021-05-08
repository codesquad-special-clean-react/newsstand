import { RouterContextProvider } from "../../context/RouterContext"

const Router = ({ children }) => {
    return <RouterContextProvider>
        { children }
    </RouterContextProvider>
}

export { Router };