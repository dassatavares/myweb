import styles from '../styles/Index.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp, faGithub, faBehance, faCode } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

  const instagramLink = "https://www.instagram.com";
  const linkedinLink = "https://www.linkedin.com";
  const whatsappLink = "https://wa.me/+5511958435982";
  const githubLink = "https://github.com";
  const behanceLink = "https://www.behance.net";

  return (
    <>

    <header className={styles.header}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faCode} />
      </div>
      <ul>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
      <div className={styles.social}>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={behanceLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBehance} /></a>
      </div>
    </header>

    </>
  );
}
