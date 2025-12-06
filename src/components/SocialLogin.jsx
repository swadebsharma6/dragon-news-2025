import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-bold mb-2">Login With</h3>
      <div>
        <button className="btn btn-outline w-full mb-3 hover:text-secondary">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full hover:text-secondary">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
