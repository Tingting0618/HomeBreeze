import React from "react"
import { Route } from "react-router-dom"
import { HomeProvider } from "./home/HomeProvider"
import { MyHomeList } from "./home/MyHomeList"
import { FeaturedList } from "./home/FeaturedList"
import { HomeList } from "./home/HomeList"
import { HomeForm } from "./home/HomeForm"
import { HomeDetail } from "./home/HomeDetails"
import { SearchBar } from './nav/SearchBar'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import {NavBar_main} from "./nav/NavBar"
import {Footer} from "./nav/Footer"


export const ApplicationViews = () => {
    return (
        <>
            <HomeProvider>
                <Route exact path="/">
                    <NavBar_main />
                    <SearchBar />
                    <FeaturedList />
                    <Footer />
                </Route>

                <Route path="/buy">
                    <NavBar_main />
                    <HomeList />
                </Route>

                <Route exact path="/homes/create">
                    <NavBar_main /> 
                    <HomeForm />
                </Route>

                <Route path="/sell">
                    <NavBar_main />
                    <HomeForm />
                </Route>

                <Route path="/mylistings">
                    <NavBar_main />
                    <MyHomeList />
                </Route>

                <Route path="/homes/edit/:homeId(\d+)">
                    <NavBar_main />
                    <HomeForm />
                </Route>

                <Route exact path="/homes/detail/:homeId(\d+)">
                    <NavBar_main />
                    <HomeDetail />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

            </HomeProvider>
        </>
    )
}

