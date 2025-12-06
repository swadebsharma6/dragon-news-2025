import { Suspense } from "react";
import AllCategories from "../AllCategories/AllCategories";


const LeftAside = () => {


      return (
            <div>
                  <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                         <AllCategories/>
                  </Suspense>
               
            </div>
      );
};

export default LeftAside;