import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layout/Header/Header";
import CarouselHome from "./Layout/CarouselHome/CarouselHome";

export const HomeTemplate = ({ Component }) => {
  return (
    <Fragment>
      <Header />
      <CarouselHome />
      <Component />
      <Outlet />
      <footer className="bg-black h-10 text-white">
        Đây là footer homepage
      </footer>
    </Fragment>
  );
};
