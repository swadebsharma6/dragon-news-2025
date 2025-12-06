import FindUs from "../FindUs/FindUs";
import QZone from "../Qzone/Qzone";
import SocialLogin from "../SocialLogin";


const RightAside = () => {
      return (
            <div className="space-y-5">
                  <SocialLogin/>
                  <FindUs/>
                  <QZone/>
            </div>
      );
};

export default RightAside;