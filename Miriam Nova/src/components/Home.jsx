import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
    <div className={styles.container} id="home">
      <div className={styles.background}></div>
      <div className={styles.presentation}>
        <h1 className={styles.h1}>
          Miriam <span className={styles.nova}>Nova</span>
        </h1>
        <h2 className={styles.h2}>Actriz, Cantante</h2>
        <h2 className={styles.h2}>Docente de Canto y Teatro.</h2>
      </div>
    </div>
    <div className={styles.containerx} id="about">
        <div className={styles.images}>
            <img src="1-960x750.jpg" alt="1" className={styles.img} />
            <img src="2-960x750.jpg" alt="2" className={styles.img}/>
            <img src="3-960x750.jpg" alt="3" className={styles.img}/>
        </div>
        <h1 className={styles.h1x}>Acerca De Mi</h1>
        <br />
        <p className={styles.p}>
        Hola, soy Miriam Nova. Mi pasión por la música comenzó de niña, y a
        los 15 años ya cantaba en eventos de la comunidad judía y en
        celebraciones.
      </p>
      <br />
      <p className={styles.p}>
        Me recibí de Licenciada y Profesora de Artes en la UBA, estudié guitarra,
        comedia musical en la Escuela de Hugo Midón, y seminarios en la Escuela
        del Globo en Buenos Aires.
      </p>
      <br />
      <p className={styles.p}>
        He actuado en obras como “Esperando al Zurdo”, “El Candidato”, y “Los
        Miserables”, y escribí y actué en el unipersonal “Sabor a Mi Bemol”.
      </p>
      <br />
      <p className={styles.p}>
        Desde 2016, dirijo el taller de canto “Oye tu voz”, donde organizo
        shows y muestras para mis alumnos. Además, dirijo un elenco de teatro
        desde 2017, con una muestra anual abierta al público.
      </p>
      <br />
      <p className={styles.p}>
        Estoy agradecida por poder compartir mi amor por la música, el canto y
        el teatro, tanto en mis clases como en las experiencias que vivo con
        mis alumnos.
      </p>
      <a href="#home">
        <img src="arrow.png" alt="arrow icon" className={styles.arrow} />
      </a>
    </div>
    </div>
  );
};

export default Home