import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({children}) => {

      const {user, loading} = useContext(AuthContext);
      const location = useLocation();
      if(loading){
            return <div className="text-center py-5"><span className="loading loading-ring loading-xl text-orange-600"></span></div>
      }

      if(!user){
            return <Navigate to='/auth/login' state={location.pathname}></Navigate>
      }

      return children;
};

export default PrivetRoute;