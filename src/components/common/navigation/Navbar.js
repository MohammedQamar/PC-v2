import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

function NavBar() {
  const router = useRouter();
  return (
    <Nav>
      <div className="image">
        <Link href="/">
          <img src="/logo.svg" />
        </Link>
      </div>
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#courses">courses</Link>
        </li>
        <li className={router.pathname == "/projects" ? "active" : ""}>
          <Link href="/projects">projects</Link>
        </li>
        <li className={router.pathname == "/blog" ? "active" : ""}>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 70px 1fr;
  background: rgba(2, 12, 12, 1);
  color: var(--secondary-font);
  text-transform: uppercase;
  .image {
    align-self: flex-end;
    padding-left: 30px;
    cursor: pointer;
  }

  ul {
    display: flex;
    padding-right: 30px;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
  }
  li {
    align-self: center;
    margin-right: 20px;
  }
  li:hover {
    color: var(--button-bcg);
    cursor: pointer;
  }

  .active {
    border-bottom: solid 2px var(--button-bcg);
  }
`;

export default NavBar;
