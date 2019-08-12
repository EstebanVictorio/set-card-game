import React from "react";
import Page from "components/page";
import { Link } from "react-router-dom";
import Rules from "components/game/rules";

const Home = () => (
  <Page>
    <Rules />
    <Link className="primary" to="/play">
      Play Set!
    </Link>
  </Page>
);

export default Home;
