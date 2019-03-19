import React from "react";
import { Tile } from "../tile";
import { Display } from "../display";
import style from '../../../theme';

const ApolloWrapper = style.div`

`

export const Apollo = () => (
  <ApolloWrapper>
    <Display rows={20} columns={10} />
  </ApolloWrapper>
);
