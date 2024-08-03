import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/login")
        }
    }, [store.token])

    const handleLogout = () => {
		actions.logout()
		navigate("/login")
	}

    return (
        <React.Fragment>
            <div className="containerPrivate">
                <div>
                    <h2>Private Page</h2>
                    <p>This page is only accessible to authenticated users.</p>
                </div>
            </div>
            <div>
                <h6>User information</h6>
                    {store.user ? (
                    <>
                        <p>Email: {store.user.email}</p>
                        <p>User ID: {store.user.id}</p>
                    </>
                ) : (
                    <p>Loading user information...</p>
                )}
            </div>
            <div className="buttonPrivate col-11">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </React.Fragment>
    )
}