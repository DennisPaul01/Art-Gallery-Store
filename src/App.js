import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import AccountPage from "./Pages/AcountPage";
import CartPage from "./Pages/CartPage";
import CollectionsPage from "./Pages/CollectionsPage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/account">
            <AccountPage></AccountPage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>
          <Route path="/collections">
            <CollectionsPage></CollectionsPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/product">
            <ProductPage></ProductPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
