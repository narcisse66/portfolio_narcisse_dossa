import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen max-w-full flex-col items-start lg:flex-row extra:mx-auto extra:px-56">
      {/* NavBar */}

      <NavBar />

      {/* Main content */}
      <main className="flex min-h-screen w-full flex-col items-start justify-between space-y-8 px-5 py-2 lg:w-[75%] lg:px-8 lg:py-6 xl:px-12">
        <Outlet />

        <Footer />
      </main>
    </div>
  );
};

export default Layout;
