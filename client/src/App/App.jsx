import NavBar from "../components/NavBar/NavBar.component";
import LoginPage from "../Pages/LoginPage/LoginPage.component";
import ProductPage from "../Pages/ProductPage/ProductPage.component";
import HomePage from "../Pages/HomePage/HomePage.component";
import AddStockItem from "../components/AddStockItem/AddStockItem.component";
import DeleteStockItem from "../components/DeleteStockItem/DeleteStockItem.component";
import EditStockItem from "../components/EditStockItem/EditStockItem.component";

import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux";
import "./App.scss";
import { selectCurrentUser } from "../redux/user/user.selectors";

function App({ currentUser }) {
    console.log(currentUser)
    return <div className="App">
        <NavBar />
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/product" exact component={ProductPage} />
            <Route path="/product/new/:currentProductId" exact component={AddStockItem} />
            <Route path="/product/update/:currentProductId/:currentItemId" exact component={EditStockItem} />
            <Route path="/product/delete/:currentProductId/:currentItemId" exact component={ProductPage} />
        </Switch>

    </div>;
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})


export default connect(mapStateToProps)(App);
