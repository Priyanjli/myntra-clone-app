import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faShoppingBag,
} from "@fortawesome/fontawesome-free-solid";
import { LI, UL } from "../commen/styeledUlLi";

export const IconText = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
const SideBar = ({ showMenu }) => {
  return (
    <>
      <div style={{ flex: "auto", textAlign: "center" }}>
        <UL>
          <LI>
            {/* <IconWraper>
              <link
                to="/profile"
                block
                onMouseOver={() => {
                  showMenu("profile");
                }}
                onMouseLeave={() => {
                  showMenu();
                }}
              >
                <i className="fa-regular fa-user"></i>
              </link>
              <IconText>Profile</IconText>
            </IconWraper> */}
          </LI>
          <LI>
            <link to="/wishlist" block>
              <i className="fa-regular fa-heart"></i>
            </link>
            <IconText>Wishlist</IconText>
          </LI>
          <LI>
            <link to="/bag" block>
              <FontAwesomeIcon icon="fa-regular fa-bag-shopping" />
              <FontAwesomeIcon icon={faShoppingBag} />
            </link>
            <IconText>Bag</IconText>
          </LI>
        </UL>
        <div>wlkjdlewjdlwejdlqkj</div>
      </div>
    </>
  );
};

export default SideBar;
