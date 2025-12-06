import { Outlet } from "react-router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayoutComponent/LeftAside";
import RightAside from "../components/HomeLayoutComponent/RightAside";




const HomeLayout = () => {
      return (
            <div>
                  <header>
                        <Header/>  
                        <Navbar/>
                  </header>
                  <main className="grid grid-cols-12 gap-4">
                        <section className="left-nav col-span-3">
                              <LeftAside/>
                        </section>
                        <section className="main col-span-6">
                              <Outlet/>
                        </section>
                        <section className="right-nav col-span-3">
                              <RightAside/>
                        </section>
                  </main>
            </div>
      );
};

export default HomeLayout;