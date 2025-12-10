import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
  const [error, setError] = useState("");
    const {logInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

  const handleLogin = e =>{
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    //login user
    logInUser(email, password)
    .then(result =>{
      console.log('login', result.user);
      navigate(location.state || '/')
    })
    .catch(error =>{
      setError(error.message)
    })
   
  }

      return (
            <div className="min-h-[800px] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="font-bold text-center py-5">Login your account</h3>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>
            {
              error && <p className="text-center py-4 text-secondary font-semibold">{error}</p>  
            }

            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-bold text-center py-4">Don't Have An Account ? <Link className="text-secondary" to='/auth/register'>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
      );
};

export default Login;