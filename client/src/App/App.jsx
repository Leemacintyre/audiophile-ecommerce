import { NavBar } from "../components/NavBar/NavBar.component";
import { ProductPage } from "../Pages/ProductPage.component";
import "./App.scss";

function App() {
    return <div className="App">
        <NavBar />
        <ProductPage />
    </div>;
}

export default App;
