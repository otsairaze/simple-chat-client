import { Outlet } from "react-router-dom";

import { AsideMenu, Container, SearchBar } from "../components/shared";

export const MainLayout = () => {
  return (
    <Container className="mt-5">
      <div className="rounded-2xl bg-[#0E1621] flex">
        <AsideMenu />
        <main className="h-[90vh] w-full py-[30px]">
          <SearchBar />
          <Outlet />
        </main>
      </div>
    </Container>
  );
};
