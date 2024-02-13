import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
            FinancesTracker
        </Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">
                        Transactions
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">
                        Create Transaction Log
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/user" className="nav-link">
                        Create User
                    </Link>
                </li>
            </ul>
            <Link to="/login" className="nav-link">
                <Button variant="outline-secondary">Log In</Button>
            </Link>
            <Link to="/signup" className="nav-link">
                <Button variant="primary">Sign Up</Button>
            </Link>
        </div>
    </nav>
);

export default Navbar;