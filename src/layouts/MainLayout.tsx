import { Outlet } from "react-router-dom";

import { AsideMenu, Container } from "../components/shared";

export const MainLayout = () => {
  return (
    <Container className="mt-5">
      <div className="rounded-2xl bg-white flex">
        <AsideMenu />
        <main className="h-[90vh] w-full">
          <Outlet />
        </main>
      </div>
    </Container>
  );
};
