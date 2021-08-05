import React, { lazy } from "react";
import { Route, Switch } from "react-router";
const Filter = lazy(() => import("../fetures/Filter/Filter"));
const NoMatch = lazy(() => import("../fetures/NoMatch/NoMatch"));
const MoviePlayer = lazy(() => import("../fetures/MoviePlayer"));
const Home = lazy(() => import("../fetures/Home"));
const Categories = lazy(() => import("../fetures/AnimeCategories/AnimeCategories"));
const AnimeCollections = lazy(() => import("../fetures/AnimeCollections/AnimeCollections"));

export default function route(){
    
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/the-loai/:meta"><Categories /></Route>
            <Route exact path="/bo-suu-tap/:meta"><AnimeCollections /></Route>
            <Route exact path="/xem-phim/:meta/:episode"><MoviePlayer /></Route>
            <Route exact path="/tim-kiem"><Filter /></Route>
            <Route exact path="*"><NoMatch /></Route>
        </Switch>
    )
}