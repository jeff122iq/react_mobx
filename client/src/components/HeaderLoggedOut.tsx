import React from "react";
import Container from "./Container";
import styled from "styled-components";
import Logo from "./generick/Logo";
import {headerAuthMenu, headerLoggedOutMenu} from "../content/headerLoggedOut";
import {Link} from "react-router-dom";
import NeonLogo from "./NeonLogo";

const PageHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderLoggedOutContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavigationMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationItem = styled(Link)`
  margin: 0 15px;
  color: #ffffff;
  text-decoration: none;
`

const AuthMenu = styled(NavigationMenu)``

const AuthItem = styled(NavigationItem)``

function HeaderLoggedOut() {
  return (
    <PageHeader>
      <HeaderLoggedOutContainer>
        <Logo>
          <Link to="/">
            <NeonLogo fontFamily="Pacifico" size="40px">
              Game Lab
            </NeonLogo>
          </Link>
        </Logo>
        <NavigationMenu>
          {headerLoggedOutMenu.map((item, idx) => {
            return (
              <NavigationItem key={idx} to={item.link}>{item.name}</NavigationItem>
            )
          })}
        </NavigationMenu>
        <AuthMenu>
          {headerAuthMenu.map((item, idx) => {
            return (
              <AuthItem key={idx} to={item.link}>{item.name}</AuthItem>
            )
          })}
        </AuthMenu>
      </HeaderLoggedOutContainer>
    </PageHeader>
  );
}

export default HeaderLoggedOut;