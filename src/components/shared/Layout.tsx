import React from "react";
import { AsideBar } from "../AsideBar/AsideBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AsideBar />
      <main>{children}</main>
    </>
  );
};
