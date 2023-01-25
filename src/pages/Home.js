import React from "react";
import Cards from "../components/CardsRow";
import UncontrolledCarousel from "../components/UncontrolledCarousel";
import FormComponent from "../components/FormComponent";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <UncontrolledCarousel />
      <Cards />
      <FormComponent />
    </div>
  );
};

export default Home;
