import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { actions } = useContext(Context)
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault() // envia una petición HTTP y recargar la página.
        const success = await actions.login(email, password)
        if (success) {
            navigate("/private")
        } else {
            console.error("Failed to log in")
        }
    }
    
    return (
        <React.Fragment>
        <div className="containerLogin">
            <div className="h2Login">
                <h2> LOGIN </h2>
            </div>
            <form className="formLogin" onSubmit={handleSubmit}>
                <div className="col-12 row">
                    <div>
                        <label>Email:</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Password:</label>
                        <input 
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                </div>
                <div className="buttonLogin">
                    <button type="submit"> Login </button>
                </div>
            </form>    
        </div>   
         </React.Fragment>
    )
}