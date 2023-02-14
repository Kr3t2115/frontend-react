import { Form } from "react-router-dom"
import  {useState , useEffect, useRef} from 'react'

interface Login {
    email: String,
    password: String
}

export default function Login() {
    const [loginData, setLoginData] = useState<Login>({
        email: '',
        password: ''
    })

    const inputEmail = useRef(<React.InputHTMLAttributes<HTMLInputElement>)

    const inputPassword = useRef(null)


    const sendData = () => {

        console.log(inputEmail.current.valueOf)
    }


    return <div>


        <input type="email" ref={inputEmail}/>
        <input type="password" ref={inputPassword} />
        <button type="submit" onClick={() => {sendData()}}>Login</button>

    </div>
}