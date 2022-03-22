import React from "react";
import styled from "styled-components";

export const UL = styled.ul`
  list-style: none;
  // display: inline-flex;
  padding-left: 0;
  padding-top: 6px;
`;

export const LI = styled.li`
  padding: 4px;
  font-size: 12px;

  padding-left: 0;
`;

const ListItem = ({ list = [] }) => {
  return (
    <>
      <UL>
        {list.map((value, i) => {
          return <LI key={i}>{value}</LI>;
        })}
      </UL>
    </>
  );
};
export default ListItem;
