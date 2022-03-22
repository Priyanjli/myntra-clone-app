import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Men from "./Man";
import Women from "./Women";

export const NavWrapper = styled.div`
  // margin: margin: auto auto auto 200px;

  ul {
    padding-left: 0;
  }
  ul li {
    font-size: 20px;
    display: inline-block;
    padding: 4px 14px 31px;

    a {
      color: none;
    }
  }
`;
const SubMenuItems = styled.div`
  width: 80%;
  margin: auto;

  position: absolute;
  top: 78px;
  left: 0;
  right: 0;
  /* padding: 20px 166px; */
  z-index: 9999999;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  ul li {
    font-size: 12px;
    display: block;
    padding: 4px 0px;

    a {
      color: none;
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  color: #282c3f;
  background-color: white;
  // height: 50vh;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.3);
  padding: 19px 15px 24px 15px;
  padding-top: 0;
  padding-bottom: 0;
`;
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

const MenuBar = () => {
  const [value, setValue] = useState({ show: false, tab: "" });
  const [tabName, setTab] = useState("MEN");
  // const showMenu = (tab) => {
  //   setValue({ ...value, tab, show: !value.show });
  // };
  const node = useRef();

  const handleMouseOver = (e) => {
    console.log("event1", e);
    if (node.current.contains(e.target)) {
      setValue({ ...value, show: true });
      return;
    }
    // outside click
    setValue({ ...value, show: false });
  };

  const handTab = (e) => {
    console.log("event1", e);
    if (node.current.contains(e.target)) {
      setValue({ ...value, show: true });
      return;
    }
    // outside click
    setValue({ ...value, show: false });
  };

  let Comp = null;

  switch (tabName) {
    case "MEN":
      Comp = <Men></Men>;
      break;
    case "WOMEN":
      Comp = <Women></Women>;
      break;
    // case "PROFILE":
    //   Comp = <Profile></Profile>;
    //   break;

    default:
      Comp = <Men></Men>;

    // code block
  }
  console.log(value);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  return (
    <>
      {/* <UserContener> */}

      <NavWrapper ref={node}>
        <div style={{ paddingTop: "7px" }}>
          <ul>
            <li
              onMouseOver={(e) => {
                setTab("MEN");
              }}

              // onMouseLeave={(e) => {
              //   showMenu("MEN", e);
              // }}
            >
              <StyledLink to="/men">MEN</StyledLink>
            </li>
            <li
              onMouseOver={(e) => {
                setTab("WOMEN");
              }}
            >
              <StyledLink
                to="/women"

                // onMouseLeave={() => {
                //   showMenu();
                // }}
              >
                WOMEN
              </StyledLink>
            </li>
            <li>
              <StyledLink
                // onMouseOver={() => {
                //   showMenu("KIDES");
                // }}
                // onMouseLeave={() => {
                //   showMenu();
                // }}
                to="/kides"
              >
                KIDES
              </StyledLink>
            </li>
            <li>
              <StyledLink
                // onMouseOver={() => {
                //   showMenu("HOME & LIVING");
                // }}
                // onMouseLeave={() => {
                //   showMenu();
                // }}
                to="/homeandliving"
              >
                {"HOME & LIVING"}
              </StyledLink>
            </li>
            <li>
              <StyledLink
                // onMouseOver={() => {
                //   showMenu("BUTEY");
                // }}
                // onMouseLeave={() => {
                //   showMenu();
                // }}
                to="/butey"
              >
                {"BUTEY"}
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/studio">{"STUDIO"}</StyledLink>
            </li>
          </ul>
        </div>
        {value.show && (
          <SubMenuItems>
            <MenuContainer>{Comp}</MenuContainer>
          </SubMenuItems>
        )}
      </NavWrapper>
    </>
  );
};

export default MenuBar;
