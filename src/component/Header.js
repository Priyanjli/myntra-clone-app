import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faShoppingBag,
} from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import Menu_bar from "./Menu_bar";

import { LI, UL } from "../commen/styeledUlLi";
import logo from "../img/myantra.png";
import Profile from "./profile";

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #282c3f;
  border-bottom: none;
  -webkit-transition: left 0.2s ease-out, width 0.2s ease-out;
  transition: left 0.2s ease-out, width 0.2s ease-out;
  font-weight: 500;
  text-transform: uppercase;
  ${({ block }) => block && "display: block"}
`;
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 4px 12px rgb(0 0 0 / 5%);
`;
export const IconWraper = styled.div`
  // display: flex;
`;

export const IconText = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
const IMG = styled.img`
  && {
    // margin-top: -9px;
    margin-left: 32px;
    width: 49px;
    height: 33px;
    border: none;
    border: none;
  }
`;

const INPUT = styled.input`

    display: inline-block;
    float: left;
    font-size: 14px;
    height: 20px;
    line-height: 24px;
    width: 75%;
    color: #696e79;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    padding: 8px 45px 10px;
    margin: 0;
    outline: 0;
    border: 1px solid #f5f5f6;
    border-radius: 0 4px 4px 0;
    border-left: 0;
    background: #f5f5f6;
}
`;

const ProfileBarWreper = styled.div`
  position: absolute;
  color: #282c3f;
  box-shadow: 0 22px 30px rgba(0, 0, 0, 0.3);
  padding: 100px;
  top: 79px;
  right: 30px;
  padding: 19px 15px 24px 60px;
  padding-top: 0;
  padding-bottom: 0;
`;
export const HeaderItemWrapper = styled.div`
  display: flex;
  padding: 15px 22px 0px;
`;
const SarchBarWape = styled.div`
  flex: 9 0;
  padding-top: 6px;
`;

export const StyledA = styled.a`
  box-sizing: content-box;
  display: inline-block;
  height: 28px;
  width: 40px;
  text-align: center;
  padding: 8px 0 2px;
  background: #f5f5f6;
  border: 1px solid #f5f5f6;
  border-right: none;
  border-radius: 4px 0 0 4px;
  position: absolute;
  left: 0px;
`;
const Header = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderItemWrapper>
          <div style={{ marginRight: "50px", paddingTop: "7px" }}>
            <Link to="/">
              <IMG src={logo}></IMG>
            </Link>

            {/* <LOGO></LOGO> */}
          </div>
          <Menu_bar></Menu_bar>
          <SarchBarWape>
            <div style={{ position: "relative", marginLeft: "25px" }}>
              <INPUT placeholder="Search for products brands"></INPUT>
              <StyledA>
                <span>
                  <i className="fa fa-search"></i>
                </span>
              </StyledA>
            </div>
          </SarchBarWape>
          <Profile></Profile>
        </HeaderItemWrapper>
      </HeaderContainer>
    </React.Fragment>
  );
};
export default Header;
