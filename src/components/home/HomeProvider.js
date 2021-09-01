import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const HomeContext = createContext()

// This component establishes what data can be used.
export const HomeProvider = (props) => {
    const [homes, setHomes] = useState([])

    const getHomes = () => {
        return fetch("http://localhost:8088/homes?_expand=user")
        .then(res => res.json())
        .then(setHomes)
    }

    const addHome = homeObj => {
        return fetch("http://localhost:8088/homes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(homeObj)
        })
        .then(getHomes)
    }

    return (
        <HomeContext.Provider value={{
            homes, getHomes, addHome
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}
