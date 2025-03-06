import React from "react";
import Banner from "../components/Banner";
import CategoryBar from "../components/CategoryBar";
import CoursesPage from "../components/CoursesPage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="lg:px-9 md:px-5 sm:px-3 pt-10">
        <Banner />
      </div>
      <div className="lg:px-9 md:px-5 sm:px-5 pt-10">
        <CoursesPage />
      </div>
      <div></div>
    </>
  );
};

export default Home;
