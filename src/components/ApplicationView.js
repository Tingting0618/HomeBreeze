import React from "react"
import { Route } from "react-router-dom"
import { HomeProvider } from "./home/HomeProvider"
import { HomeList } from "./home/HomeList"
import { HomeForm } from "./home/HomeForm"

export const ApplicationViews = () => {
    return (
        <>
            <HomeProvider>
                <Route exact path="/">
                    <HomeList />
                </Route>
                <Route path="/buy">
                    <HomeList />
                </Route>

                <Route exact path="/homes/create">
                    <HomeForm />
                </Route>

                <Route path="/sell">
                    <HomeForm />
                </Route>
                
            </HomeProvider>


        </>
    )
}

