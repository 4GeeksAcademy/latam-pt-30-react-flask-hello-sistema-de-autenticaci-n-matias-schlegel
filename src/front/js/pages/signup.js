import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault() // envia una petición HTTP y recargar la página.
        const success = actions.signup(email, password)
        if (success) {
            navigate("/login") //todavia no hice la parte del login
        } else {
            console.error("Failed to sign up")
        }
    }
    
    
    return (
        <React.Fragment>

        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
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
        </form>    
            <button type="submit">Sign Up</button>

         </React.Fragment>
    )
}