
import logo from "../assets/logo.png";

import { format } from "date-fns";


const Header = () => {
  return (
    <section >
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-3 py-3">
          <img src={logo} alt="" />
        </div>
        <div className="space-y-3">
          <p className="text-xl font-bold">Journalism Without Fear or Favour</p>
          <p className="font-semibold text-blue-700">
            {format(new Date(), "EEEE , MMMM MM, yyyy")}
          </p>
        </div>
      </div>
      {/* Latest News */}
      <div className="flex items-center">
        <div><button className="btn btn-secondary mr-4">Latest News</button></div>
        
        <div>
          <p className="text-sm font-semibold"> Match Highlights: Germany vs Spain as it happened !Match Highlights Germany vs Spain as</p>
        </div>
       
        
      </div>
    </section>
  );
};

export default Header;
