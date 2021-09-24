import React from "react";
import { Switch } from "react-router-dom";
import "./App.styles.scss";

import Header from "../components/header/header.component";
import { Button } from "../components/button/button.component";

function App() {
    return (
        <div>
            <Header />
            <Button type="button">test</Button>
            <Switch></Switch>
        </div>
    );
}

export default App;
