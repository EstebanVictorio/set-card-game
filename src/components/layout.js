import React from "react";
import GlobalStyles from "utils/global-styles";
import Navbar from "components/navigation/navbar";

const Layout = ({ children }) => (
  <div className="App">
    <GlobalStyles />
    <Navbar />
    {children}
  </div>
);

export default Layout;
