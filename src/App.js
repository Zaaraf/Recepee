import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

import { isMobile } from "react-device-detect";
import MobileNotSupported from "./MobileNotSupported";

function App() {
  // Check if the user is on a mobile device
  const isUserOnMobile = isMobile;

  // Render the mobile not supported message if the user is on a mobile device
  if (isUserOnMobile) {
    return (
      <div>
        <Nav>
          <GiKnifeFork />
          <h1 style={{ paddingLeft: "5px" }}>Recepee</h1>
        </Nav>
        <MobileNotSupported />
      </div>
    );
  }

  // Otherwise, render your desktop React app here

  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Recepee</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
