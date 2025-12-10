import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user , logOutUser} = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
    .then(()=>{
      alert('User Logout Successfully')
    })
  };

  return (
    <div className="navbar bg-base-200 shadow-sm my-5">
      <div className="navbar-start"></div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/career"}>Career</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar mr-5">
          <div className="w-12 ring-success ring-offset-base-100 rounded-full">
          {user ?   <img src={user?.photoURL} /> :   <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />}
          </div>
        </div>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-secondary">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            {" "}
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
