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
                        <section className="col-span-3 sticky top-0 h-fit">
                              <LeftAside/>
                        </section>
                        <section className="col-span-6">
                              <Outlet/>
                        </section>
                        <section className=" col-span-3 sticky top-0 h-fit">
                              <RightAside/>
                        </section>
                  </main>
            </div>
      );
};

export default HomeLayout;