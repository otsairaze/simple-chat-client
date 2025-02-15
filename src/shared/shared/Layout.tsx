import { AsideMenu, TopBar } from "../components";
import { Outlet } from "react-router-dom";
import { Container } from "./Container/Container";

export const Layout = () => {
  return (
    <Container className="mt-5">
      <TopBar />
      <div className="flex">
        <AsideMenu />
        <main className="h-[1000px]">
          <Outlet />
        </main>
      </div>
    </Container>
  );
};
