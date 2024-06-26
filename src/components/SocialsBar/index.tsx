import { FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
const SocialsBar = () => {
  return (
    <section className={`${Styles.socialsBar} text-dark dark:text-white`}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      {/* <a 
        href="https://github.com" 
        target="_blank" 
        rel="noreferrer"
      >
        <FaGithub className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a> */}
      {/* <a
        href="https://www.linkedin.com/company/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a> */}
      <a
        href="mailto:contact@lalomamc.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
