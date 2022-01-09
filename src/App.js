import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

import Layout from "./Components/Layout/Layout";
import AccountPage from "./Pages/AcountPage";
import CartPage from "./Pages/CartPage";
import CollectionsPage from "./Pages/CollectionsPage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/account">
              <AccountPage></AccountPage>
            </Route>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/account">
              <LoginPage></LoginPage>
            </Route>
          )}
          {!authCtx.isLoggedIn ? (
            <Route path="/cart">
              <LoginPage></LoginPage>
            </Route>
          ) : (
            <Route path="/cart">
              <CartPage></CartPage>
            </Route>
          )}
          <Route path="/collections">
            <CollectionsPage></CollectionsPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/product/:artId">
            <ProductPage></ProductPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
