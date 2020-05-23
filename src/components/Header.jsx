import React from "react";
import { Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip>Know about Kanban</Tooltip>}
      >
        <a
          href="https://www.digite.com/kanban/what-is-kanban/"
          target="__blank"
          style={{ marginLeft: "15px" }}
        >
          <i class="fab fa-jira fa-2x jira-icon"></i>
        </a>
      </OverlayTrigger>
      <Navbar.Brand className="ml-auto mr-auto" align="center">
        <h4 className="main-heading">Kanban Dashboard</h4>
      </Navbar.Brand>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip>View Source Code</Tooltip>}
      >
        <a
          href="https://github.com/gowthamparuchuru/react-kanban-dashboard"
          target="__blank"
          style={{ marginRight: "15px" }}
        >
          <i class="fab fa-github fa-2x github-icon"></i>
        </a>
      </OverlayTrigger>
    </Navbar>
  );
}

export default Header;
