import React from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - var(--nav-height));
`;

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const Page = ({ children }) => {
  return (
    <StyledContainer className="Page">
      <StyledPage>{children}</StyledPage>
    </StyledContainer>
  );
};

export default Page;
