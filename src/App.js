import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import TransactionsList from "./components/TransactionsList";
import EditTransaction from "./components/EditTransaction";
import CreateTransaction from "./components/CreateTransaction";

import Account from "./components/Account";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

import { Container } from "react-bootstrap";

function App() {
    return (
        <Router>
            <div className="container-lg">
                <Navbar />
                <br />
                <Switch>
                    <Route exact path="/">
                        <TransactionsList />
                    </Route>
                    <Route path="/edit/:id">
                        <EditTransaction />
                    </Route>
                    <Route path="/create">
                        <CreateTransaction />
                    </Route>
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "100vh" }}
                    >
                        <div className="w-100" style={{ maxWidth: "400px" }}>
                            <AuthProvider>
                                <PrivateRoute
                                    path="/account"
                                    component={Account}
                                />
                                <PrivateRoute
                                    path="/update-profile"
                                    component={UpdateProfile}
                                />
                                <Route path="/signup">
                                    <Signup />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                </Route>
                                <Route path="/forgot-password">
                                    <ForgotPassword />
                                </Route>
                            </AuthProvider>
                        </div>
                    </Container>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

