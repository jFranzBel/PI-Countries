import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
     return (
          <div className={styles.container}>
               <div className={styles.card}>
                    <h1 className={styles.title}>Bienvenido!</h1>
                    <img src="/earth.png" className={styles.logoImage}></img>
                    <div>
                         <Link to="/home">
                              <button className={styles.button}>Ingresar</button>
                         </Link>
                    </div>
               </div>
          </div>
     )
}