import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const {logInUser} = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    //login user
    logInUser(email, password)
    .then(result =>{
      console.log('login', result.user)
    })
    .catch(error =>{
      console.log(error.message)
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
            
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-bold text-center py-4">Don't Have An Account ? <Link className="text-secondary" to='/auth/register'>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
      );
};

export default Login;