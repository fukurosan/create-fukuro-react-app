module.exports = `import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class TopMenu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <NavLink exact className="navbar-brand" to="/">Fukuro App</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">Page 1</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Page2">Page 2</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenu;
`