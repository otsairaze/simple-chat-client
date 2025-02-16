import { Outlet } from "react-router-dom";

import { AsideMenu, Container, TopBar } from "../components/shared";

export const MainLayout = () => {
  return (
    <Container className="mt-5">
      <div className="rounded-2xl bg-white">
        <TopBar />
        <div className="flex">
          <AsideMenu />
          <main className="h-[90vh] w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </Container>
  );
};
