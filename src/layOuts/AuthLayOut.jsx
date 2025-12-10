import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayOut = () => {
  return (
    <div className="h-screen">
        <Navbar />
        <main>
            <Outlet></Outlet>
        </main>
    </div>
  );
};

export default AuthLayOut;
