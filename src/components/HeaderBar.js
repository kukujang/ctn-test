import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class HeaderBar extends Component {
  render() {
    return (
      <div className="header-bar">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12">
              <div className="d-flex h-100 align-items-center">
                <div className="pr-2">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Male</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item" to="/">Male</Link>
                      <Link className="dropdown-item" to="/">Female</Link>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input type="text" className="form-control form-control-sm" placeholder="Search" />
                </div>
                <div className="pl-3"><Link to="/category">Genre</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
