import React from "react"
import { Route } from "react-router-dom"
import { HomeProvider } from "./home/HomeProvider"
import { MyHomeList } from "./home/MyHomeList"
import { FeaturedList } from "./home/FeaturedList"
import { HomeList } from "./home/HomeList"
import { HomeForm } from "./home/HomeForm"
import { HomeDetail } from "./home/HomeDetails"
import { SearchBar } from './nav/SearchBar';

export const ApplicationViews = () => {
    return (
        <>
            <HomeProvider>
                <Route exact path="/">
                    <SearchBar />
                    <FeaturedList />
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

                <Route path="/mylistings">
                    <MyHomeList />
                </Route>

                <Route path="/homes/edit/:homeId(\d+)">
                    <HomeForm />
                </Route>

                <Route exact path="/homes/detail/:homeId(\d+)">
                    <HomeDetail />
                </Route>
            </HomeProvider>


        </>
    )
}

