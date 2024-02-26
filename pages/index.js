import { useEffect } from 'react';


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

  const bDay = () => {

    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear() + 1

    console.log(day + '/' + month + '/' + year)

    

  }
  
  bDay()


  return (
    <>


      <section className={styles.mainContainer}>
        <Header />       
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
