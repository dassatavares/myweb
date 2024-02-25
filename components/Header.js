import styles from '../styles/Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp, faGithub, faBehance, faCodepen } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

  const socialLinks = {
    instagram: "https://www.instagram.com/dassatavares",
    linkedin: "https://www.linkedin.com/in/dassatavares/",
    whatsapp: "https://wa.me/+5511958435982",
    github: "https://github.com/dassatavares/",
    behance: "https://www.behance.net/dassaevtavares/",
  };

  return (
    <>

      <header className={styles.header}>
        {/* <div className={styles.logo}>
          <FontAwesomeIcon icon={faCodepen} />
        </div> */}

        <ul>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>

        <div className={styles.social}>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </div>

        <div className={styles.switcher}>
          <span>PT</span>
          <label>
            <input type="checkbox" defaultChecked /><b></b>
          </label>
          <span>EN</span>
        </div>
      </header>

    </>
  );
}
