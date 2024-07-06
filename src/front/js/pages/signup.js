import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault() // envia una petición HTTP y recargar la página.
        const success = await actions.signup(email, password)
        if (success) {
            navigate("/login")
        } else {
            console.error("Failed to sign up")
        }
    }
    
    
    return (
        <React.Fragment>
        <div className="containerSignup">
            <div className="h2Signup">
                <h2>SIGN UP</h2>
            </div>
            <form className="formSignup" onSubmit={handleSubmit}>
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
                <div className="buttonSignup">
                    <button type="submit">Sign Up</button>
                </div>
            </form>    
        </div>   
         </React.Fragment>
    )
}