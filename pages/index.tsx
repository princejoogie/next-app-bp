import React from "react";
import type { NextPage } from "next";
import { Container } from "@/components";

const Home: NextPage = () => {
  return (
    <Container className="h-screen flex flex-col items-center justify-center">
      <h1>Next JS Boilerplate</h1>
    </Container>
  );
};

export default Home;
