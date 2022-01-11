import "./App.scss";

import React, { Suspense, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "./store/auth-context";

import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import LazySpinner from "./Components/UI/LazySpinner";

const AccountPage = React.lazy(() => import("./Pages/AcountPage"));
const CartPage = React.lazy(() => import("./Pages/CartPage"));
const CollectionsPage = React.lazy(() => import("./Pages/CollectionsPage"));
const ProductPage = React.lazy(() => import("./Pages/ProductPage"));
const LoginPage = React.lazy(() => import("./Pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./Pages/RegisterPage"));
const HomePage = React.lazy(() => import("./Pages/HomePage"));

/*Imports order
- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
*/

function App() {
  /* 
Rules for Components:
- Very first line 
- Initialize State Variables 
- Create Refs 
- Initialize hooks 
- Write all useEffects
- Create const/var/let specific to Component
- Call functions */

  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<LazySpinner></LazySpinner>}>
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
        </Suspense>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
