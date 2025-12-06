import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold my-3">Find Us On</h3>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item"> <FaFacebook/> Facebook</button>
          <button className="btn join-item"> <FaTwitter/> Twitter</button>
          <button className="btn join-item"> <FaInstagram/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
