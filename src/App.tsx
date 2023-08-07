import React from "react";
//import logo from "./logo.svg";
import logo from "./images/network-team-icon.png";
import "./App.css";
import "./style.css";

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
}

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={logo} alt="TeamNetworking" width="100" />
        </div>
        <div id="header-info">
          <h1>Team Networking</h1>
          <h2>CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </div>
    </header>
  );
}

function ContentWrapper() {
  return <div id="main">To DO table</div>;
}

function AppFooter() {
  return (
    <footer>
      <a className="item" href="https://github.com/nmatei/teams-networking">
        <span>👩‍💻</span>
        <span>Source code</span>
      </a>
      <span className="item">|</span>
      <a
        className="item"
        href="https://github.com/nmatei/node-api"
        target="blank"
      >
        <span>📃</span>
        <span>Api Docs</span>
      </a>
    </footer>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
