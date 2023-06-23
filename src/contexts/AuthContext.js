import { createContext, useState } from "react";

const AuthContext = createContext({})

export function AuthProvider({children}){

    const [logado,setLogado] = useState(false)

    function signIn(){
        return new Promise(resolve => {
            setTimeout(function(){
                setLogado(true)
            }, 2000)
        })
    }
    return(
        <AuthContext.Provider value = {{logado, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext