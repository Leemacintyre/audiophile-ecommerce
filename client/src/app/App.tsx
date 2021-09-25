import React from "react";
import { Switch } from "react-router-dom";
import "./App.styles.scss";

import { Header } from "../components/header/header.component";
import { Homepage } from "../pages/homePage/homepage.component";

function App() {
    return (
        <div>
            <Header />
            <Homepage />
            <Switch></Switch>
        </div>
    );
}

export default App;
