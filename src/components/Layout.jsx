import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const Layout = () => {
  return (
      <main>
      <NavBar />
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </main>
  );
};

export default Layout;
