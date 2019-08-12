import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  & {
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    position: sticky;
    padding: 14px 0;
    align-items: center;
    justify-content: center;
    background-color: var(--off-white);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);
  }

  .nav-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container-width);
  }

  a,
  button {
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover,
  button:hover {
    text-decoration: underline;
  }

  .nav-header a {
    font-size: 20px;
    color: var(--black);
  }

  .nav-links a,
  .nav-links button {
    font-size: 12px;
    color: var(--gray);
    padding: 0 8px;
  }

  .nav-links a:last-child,
  .nav-links button:last-child {
    padding-right: 0;
  }
`;

const Navbar = () => (
  <StyledNavbar>
    <div className="nav-container">
      <div className="nav-header">
        <Link to="/" href="/">
          Set!
        </Link>
      </div>
    </div>
  </StyledNavbar>
);

export default Navbar;
