import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  CodeCrib
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu_active" : "nav-link active"
                        }
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item ps-3">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu_active" : "nav-link active"
                        }
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item ps-3">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu_active" : "nav-link active"
                        }
                        to="/check"
                      >
                        Check
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
