import logo from "./logo.svg";
import React from "react";


const StatelessComponent = () => {
    return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />ls
            <p>
                Edit <code>src/StatelessComponent.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
    );
};


export {StatelessComponent};