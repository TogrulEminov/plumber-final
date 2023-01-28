import React from "react";
import Clients from "../../Components/Clients/Clients";
import Header from "../../Components/Header/Header";
import Impress from "../../Components/Impress/Impress";
import Message from "../../Components/Message/Message";
import Plumbing from "../../Components/Plumbing/Plumbing";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
                <title>Home</title>
            </Helmet>
      <Header />
      <Plumbing />
      <Impress />
      <Clients />
      <Message />
    </div>
  );
};

export default Home;
