import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily register <br className="sm:block hidden" /> to make you wallet social!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Registration process is quick, easy, and completely secure. You will have to sign a message with your wallet to guarantee you are the owner of the wallet, 
       your private key is never exposed, so you can rest assured that your funds are always safe. 
       Soon ours app will be available on Android and iOS!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;