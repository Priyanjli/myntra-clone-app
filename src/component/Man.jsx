import React from "react";
import ListItem from "./list";
import styled from "styled-components";

const TopWear = [
  "T-Shirts",
  "Casual Shirts",
  "ormal Shirts",
  "Sweatshirts",
  "Sweaters",
  "Jackets",
  "Blazers & Coats",
  "Suits",
  "Rain Jackets",
];

const IndianFestiveWear = [
  "Kurtas & Kurta Sets",
  "Sherwanis",
  "Nehru Jackets",
  "Dhotis",
];
const Bottomwear = [
  "Jeans",
  "Casual Trousers",
  "Formal Trousers",
  "Shorts",
  "Track Pants & Joggers",
];
const InnerwearAndSleepwear = [
  "Briefs & Trunks",
  "Boxers",
  "Vests",
  "Sleepwear & Loungewear",
  "Thermals",
];

const Footwear = [
  "Casual Shoes",
  "Sports Shoes",
  "Formal Shoes",
  "Sneakers,",
  "Sandals & Floaters",
  "Flip Flops",
  "Socks",
];

const SportsActiveWear = [
  "Sports Shoes",
  "Sports Sandals,",
  "Active T-Shirts",
  "Track Pants & Shorts",
  "Tracksuits",
  "Jackets & Sweatshirts",
  "Sports Accessories",
  "Swimwear",
];

const Gadgets = [
  "Smart Wearables",
  "Fitness Gadgets",
  "Headphones",
  "Speakers",
];

const FashionAccessories = [
  "Wallets",
  "Belts",
  "Perfumes & Body Mists",
  "Trimmers",
  "Deodorants",
  "Ties, Cufflinks & Pocket Squares",
  "Accessory Gift Sets",
  "Caps & Hats",
  "Mufflers, Scarves & Gloves",
  "Phone Cases",
  "Rings & Wristwear",
  "Helmets",
];

export const Heading = styled.span`
  color: red;
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 10px;
  ${({ block }) => block && "display: block"}
`;
export const Divider = styled.span`
  display: block;
  height: 1px;
  background-color: #e1e1e1;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 160px;
`;

export const ItemWreperMen = styled.span`
  padding-left: 25px;
  padding-right: 20px;
padding-top: 13px;
    padding-bottom: 30px;
    backgroundColor: red;
}
  ${({ backgroundColor }) => backgroundColor && "background-color: whitesmoke;"}
`;

const Men = () => {
  return (
    <>
      <ItemWreperMen>
        <Heading>Topwear</Heading>

        <ListItem list={TopWear}></ListItem>
        <Divider></Divider>
        <Heading>{"Indian & Festive Wear"}</Heading>

        <ListItem list={IndianFestiveWear}></ListItem>
      </ItemWreperMen>
      <ItemWreperMen backgroundColor>
        <Heading>Bottomwear</Heading>
        <ListItem list={Bottomwear}></ListItem>
        <Divider></Divider>
        <Heading>{"Innerwear & Sleepwear"}</Heading>
        <ListItem list={InnerwearAndSleepwear}></ListItem>
        <Divider></Divider>
        <Heading>Plus Size</Heading>
      </ItemWreperMen>
      <ItemWreperMen>
        <Heading>{"Footwear"}</Heading>
        <ListItem list={Footwear}></ListItem>
        <Divider></Divider>
        <Heading block>{"Personal Care & Grooming"}</Heading>
        <Heading block>{"Sunglasses & Frames"}</Heading>
        <Heading>{"Watches"}</Heading>
      </ItemWreperMen>
      <ItemWreperMen backgroundColor>
        <Heading>{"Sports & Active Wear"}</Heading>
        <ListItem list={SportsActiveWear}></ListItem>
        <Divider></Divider>
        <Heading>Gadgets</Heading>
        <ListItem list={Gadgets}></ListItem>
      </ItemWreperMen>
      <ItemWreperMen>
        <Heading>{"Fashion Accessories"}</Heading>
        <ListItem list={FashionAccessories}></ListItem>
        <Divider></Divider>
        <Heading block> {"Bags & Backpacks"}</Heading>
        <Heading>{"Luggages & Trolleys"}</Heading>
      </ItemWreperMen>
    </>
  );
};
export default Men;
