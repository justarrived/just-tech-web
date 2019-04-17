import { Link } from "gatsby";
import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./menu.css";

const HeaderMenu = () => (
  <Menu pageWrapId="page-wrap" outerContainerId="outer-container" width="16rem">
    <div className="">
      <div className="menu-item">
        <Link className="menu-item-link" to="/">
          Hem
        </Link>
      </div>

      <div className="menu-item">
        <a
          href="https://github.com/justarrived/just-tech-web/wiki/"
          rel="noopener noreferrer"
          target="_blank"
          className="menu-item-link"
        >
          Wiki
        </a>
      </div>

      <div className="menu-item">
        <a
          href="https://justarrived.se/"
          rel="noopener noreferrer"
          target="_blank"
          className="menu-item-link"
        >
          JustArrived
        </a>
      </div>
    </div>
  </Menu>
);

export default HeaderMenu;
