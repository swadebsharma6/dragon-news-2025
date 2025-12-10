import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //create user
    createUser(email, password)
    .then(result =>{
      console.log('create', result.user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <div className="min-h-[800px] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="font-bold text-center py-5">Register your account</h3>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />
            
            <label className="label">Photo Url</label>
            <input type="text" name="photo" className="input" placeholder="Photo" />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />
            
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-bold text-center py-4">Already Have An Account ? <Link className="text-secondary" to='/auth/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
