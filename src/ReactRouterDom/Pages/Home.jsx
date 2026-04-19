import React from "react";
import Hero from "../../Components/Hero/Hero";
// import Collection from "../../Components/Collection/LatestCollections";
import BestSeller from "../../Components/Collection/BestSeller";
import CustomerServicePolicies from "../../Components/CustomerServicePolicies/CustomerServicePolicies";
import Subscribe from "../../Components/Subscribe/Subscribe";
import LatestCollection from "../../Components/Collection/LatestCollections";

export default function Home() {
    return (
        <>

          <Hero></Hero>
          {/* <Collection></Collection> */}
          <LatestCollection></LatestCollection>
          <BestSeller></BestSeller>
          <CustomerServicePolicies></CustomerServicePolicies>
          <Subscribe></Subscribe>

        </>
    )
}