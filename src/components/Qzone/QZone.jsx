import swimImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';
import adImg from '../../assets/bg.png';

const QZone = () => {
      return (
            <section className='space-y-5'>
                  <div className="bg-base-300 p-4">
                  <h2 className="font-bold mb-3">Q-Zone</h2>
                  <div className='space-y-5'>
                        <img src={swimImg} alt="" />
                        <img className='space-y-5' src={classImg} alt="" />
                        <img src={playImg} alt="" />
                  </div>
            </div>
            {/* Add */}
            <div >
                  <img className='w-full' src={adImg} alt="" />
            </div>
            </section>
      );
};

export default QZone;