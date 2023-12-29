import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import Team from "./Team";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Пингвины
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to = "/about">
                    О нас
                  </Link>
                </li>
                <li className="nav-item">
                <Link to = "/contacts">
                    Контакты
                  </Link>
                </li>
                <li className="nav-item">
                <Link to = "/team">
                    Наша команда
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}
