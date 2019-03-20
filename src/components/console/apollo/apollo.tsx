import React from "react";
import { Tile } from "../tile";
import { Display } from "../display";
import style from "../../../theme";

const ApolloWrapper = style.div`

`;
const L = [[1, 0], [1, 0], [1, 0], [1, 1]];
const Z = [[1, 1, 0], [0, 1, 1]];
const shapes = [L, Z];

export const Apollo = () => (
  <ApolloWrapper>
    <Display rows={20} columns={10} shapes={shapes} />
  </ApolloWrapper>
);
