import React from "react";
import styles from "./Shows.module.css"

const Shows = () => {
    return(
        <div className={styles.shows_container}>
            <div className={styles.portada_shows}>
                <h1 className={styles.h1}>Shows & Eventos</h1>
            </div>
            <div className={styles.videos_container}>
                <h1>Te invito a conocer un poco de todo lo que hacemos</h1>
                <div className={styles.videos}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/W0X-jC7nHLQ?si=-fswd0E_AppWQSKt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0MOGBcsaI-8?si=qbhZPQUwAjSUcFL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Shows;
