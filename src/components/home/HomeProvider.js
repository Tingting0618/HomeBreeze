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
    const deleteHome = homeId => {
        return fetch(`http://localhost:8088/homes/${homeId}`, {
            method: "DELETE"
        })
            .then(getHomes)
    }

    const updateHome = home => {
        return fetch(`http://localhost:8088/homes/${home.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(home)
        })
          .then(getHomes)
      }

    const getHomeById = (homeId) => {
        return fetch(`http://localhost:8088/homes/${homeId}`)
        .then(res => res.json())
    }


    return (
        <HomeContext.Provider value={{
            homes, getHomes, addHome,deleteHome,updateHome,getHomeById
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}
