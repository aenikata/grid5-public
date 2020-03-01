import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contacts">Contact Us</Link>
      </li>
      {/* <li>
        <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
      </li> */}
    </ul>
  </Container>
);

export default Nav;
