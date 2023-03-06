import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id='roadmap'className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Look at ours roadmap, <br className="sm:block hidden" /> many innovations and surprise await us!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Get ready for an exciting future with Cryptogram! We're proud to announce that our high-quality social platform will soon be available on both iOS and Android, so you can stay connected with your crypto community wherever you go.
      But that's just the beginning! We're also working on a groundbreaking new feature that will allow you to simply create smart contracts and make deals with other trusted users (no coding needed), all under the watchful eye of our impartial judges selected at random from CGM holders.
      And let's not forget our upcoming token launch, complete with airdrops and presale opportunities. With Cryptogram, the possibilities are endless – so join us today and be a part of the future of crypto.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;