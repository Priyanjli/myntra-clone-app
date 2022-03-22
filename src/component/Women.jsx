import React from "react";
import { ItemWreperMen, Heading, Divider } from "./Man";
import ListItem from "./list";

const IndianFusionWear = [
  "Indian & Fusion Wear",
  "Kurtas & Suits",
  "Kurtis, Tunics & Tops",
  "Ethnic Wear",
  "Leggings, Salwars & Churidars",
  "Skirts & Palazzos",
  "Sarees",
  "Dress Materials",
  "Lehenga Cholis",
  "Dupattas & Shawls",
  "Jackets",
];

const Women = () => {
  return (
    <>
      <ItemWreperMen>
        <Heading>{"Indian & Fusion Wear"}</Heading>
        <ListItem list={IndianFusionWear}></ListItem>

        <Divider></Divider>
        <Heading>{"Indian & Festive Wear"}</Heading>
      </ItemWreperMen>
    </>
  );
};
export default Women;
