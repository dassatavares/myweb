import { useEffect, useState } from 'react';

import styles from '../styles/Index.module.scss';
import Header from '../components/Header';



export default function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
      const level = section.closest('.level');

      if (level) {
        const bullet = document.createElement("div");
        bullet.className = 'bullet-' + index;

        level.appendChild(bullet);

        console.log(bullet);
      }
    });
  }, []);

  return (
    <>

      <Header />

      <section className={styles.mainContainer}>
        <div className={styles.mainText}>


          <h1>Build your next idea even faster.</h1>
          <p>Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>
          <button>More</button>
        </div>
      </section>

      <div className={styles.level}>
        <div className={styles.bullet}>
        </div>
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        ul, li{
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
        a, li, button{
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
