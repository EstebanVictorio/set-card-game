import React from "react";
import { TOKENS } from "utils/constants";
const Tokens = ({ color, shade, shape, number }) => {
  if (
    typeof color === "undefined" &&
    typeof shade === "undefined" &&
    typeof shape === "undefined" &&
    typeof number === "undefined"
  ) {
    return null;
  }
  const key = `${number}-${shade}-${shape}-${color}-token`;
  const tokenName = `${shape}${shade}`;
  const tokenList = Array(number).fill(TOKENS[tokenName]);
  return tokenList.map((Token, index) => (
    <Token key={`${key}-${index}`} className="token" />
  ));
};

export default Tokens;
