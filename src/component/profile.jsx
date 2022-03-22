import React, { useState, useRef, useEffect } from "react";
import ListItem from "./list";
import styled from "styled-components";
import { ItemWreperMen, Heading, Divider } from "./Man";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faShoppingBag,
} from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

import { LI, UL } from "../commen/styeledUlLi";

export const IconText = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

export const IconWraper = styled.div`
  // display: flex;
`;
export const ProFileSubMenu = styled.div`
  position: absolute;
  /* background-color: white; */
  /* border: 4px solid; */
  padding: 19px 22px;
  text-align: left;
  top: 81px;
  box-shadow: 0 22px 60px rgb(0 0 0 / 30%);
  right: 24px;
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

const ProfileList = [
  "Orders",
  "Wishlist",
  "Gift Cards",
  "Contact Us",
  "Myntra Insider",
];

const MyantraCard = [
  " Myntra Credit",
  "Coupons",
  "Saved Cards",
  "Saved Addresses",
];

const Profile = () => {
  const [show, setShow] = useState(false);
  const node = useRef();
  const profileBag = useRef();
  const profileWishlist = useRef();
  const handleProfileMouseOver = (e) => {
    if (
      node.current.contains(e.target) &&
      !profileBag.current.contains(e.target) &&
      !profileWishlist.current.contains(e.target)
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    // add when mounted
    document.addEventListener("mouseover", handleProfileMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleProfileMouseOver);
    };
  }, []);

  return (
    <>
      <div style={{ flex: "auto", textAlign: "center" }} ref={node}>
        <UL>
          <LI>
            <IconWraper>
              <StyledLink
                to="/profile"
                block
                // onMouseOver={() => {
                //   showMenu("Profile");
                // }}
                // onMouseLeave={() => {
                //   showMenu();
                // }}
              >
                <i className="fa-regular fa-user"></i>
                <br></br>
                <IconText>Profile</IconText>
              </StyledLink>
            </IconWraper>
          </LI>
          <LI ref={profileBag}>
            <StyledLink to="/wishlist" block>
              <i className="fa-regular fa-heart"></i>
            </StyledLink>
            <IconText>Wishlist</IconText>
          </LI>
          <LI ref={profileWishlist}>
            <StyledLink to="/bag" block>
              <FontAwesomeIcon icon="fa-regular fa-bag-shopping" />
              <FontAwesomeIcon icon={faShoppingBag} />
            </StyledLink>
            <IconText>Bag</IconText>
          </LI>
        </UL>
        {show && (
          <ProFileSubMenu>
            <Heading>Welcome</Heading>
            <div
              style={{
                padding: "4px",
                fontSize: "12px",

                paddingleft: "0",
              }}
            >
              To access account and manage orders
            </div>
            <button
              style={{
                backgroundColor: "white",
                border: "1PX solid whitesmoke",
                color: "red",
              }}
            >
              {"LOGIN/SINGUP"}
            </button>
            <Divider></Divider>
            <ListItem list={ProfileList}></ListItem>
            <Divider></Divider>
            <ListItem list={MyantraCard}></ListItem>
          </ProFileSubMenu>
        )}
      </div>
    </>
  );
};
export default Profile;
