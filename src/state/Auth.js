import { 
    createContext, 
    useState,
    useContext,
        } from 'react'

const AuthContext = createContext({}) // VARIÁVEL QUE VAI RECEBER O ESTATO DE CONTEXTO, ONDE VAI RECEBER A VARIÁVEL DE LOGADO TRUE OU FALSE
             // ↓ O AUTHPROVIDER PRECISA SER IMPORTADO NO APP E ENVOLVER A APLICAÇÃO 
export const AuthProvider = ({ children }) =>{  // ESTE COMPONENTE VAI SER RESPONSÁVEL POR RETORNAR É O CONTEXTO AuthContext QUE VAI RECEBER UM OBJETO E DENTRO DO OBJETO TEM O .PROVIDER. O AUTHPROVIDER VAI RECEBER ALGUMA COISA COMO FILHO. ESTE COMPONENTE VAI RECEBER OS DADOS DO USUÁRIO E DIZER SE ESTÁ LOGADO OU NÃO.
    const [user, setUser] = useState({
        logged: false,
        email: '',
    })
    return(
        <AuthContext.Provider value={{user, setUser}}> 
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)    //  HOOK CRIADO POR MIM QUE VAI USAR O MÉTODO DO CONTEXT API CHAMADO USECONTEXT QUE POR SUA VEZ VAI RECEBER O CONTEXTO QUE QUERO USAR, O QUAL SERÁ AUTHCONTEXT. ELE SERÁ IMPORTADO NA PÁGINA DE LOGIN E LÁ VAI RETORNAR UM OBJETO COM USER E SETUSER

export default useAuth