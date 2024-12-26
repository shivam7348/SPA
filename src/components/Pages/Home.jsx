import React from "react";
import Hero from "../Hero Section/Hero";
import { CardDefault } from "../Hero Section/Card";
import ProducrsBAnner from "../../banner/ProducrsBAnner";
import MainBanner from "../../banner/MainBanner";
import CmsBanner from "../../banner/CmsBanner";

function Home() {
  return (
    <>


      {/* <Banner/> */}
      <MainBanner />
      <Hero />

      {/* <CardDefault
        role="Web Designer"
        img="https://img.freepik.com/premium-photo/office-responsive-devices-design-website-3d-rendering_72104-3783.jpg?semt=ais_hybrid"
      />
      <CardDefault
        role="Flutter "
        img="https://img.freepik.com/free-vector/user-experience-elements_23-2147543151.jpg?semt=ais_hybrid"
      />
      <CardDefault
        role="Tester "
        img="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-3802.jpg?semt=ais_hybrid"
      />
      <CardDefault
        role="Recat Developer"
        img="https://img.freepik.com/premium-vector/growth-your-business-landing-page-concept_823925-921.jpg?semt=ais_hybrid"
      /> */}
      {/* <ProducrsBAnner /> */}
      <CmsBanner />

    </>
  );
}

export default Home;
