import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ flags, name, continents, id }) {
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          // Use a timeout to set isVisible to true after the component is mounted
          const timeout = setTimeout(() => {
               setIsVisible(true);
          }, 175);

          // Clear the timeout on component unmount to avoid memory leaks
          return () => clearTimeout(timeout);
     }, []);

     const handleTransitionEnd = () => {
          if (!isVisible) {
               // Reset isVisible and setIsFadingOut when transition ends
               setIsVisible(true);
          }
     };

     return (
          <div
               className={`${styles.cardContainer} ${isVisible ? styles.visible : ""}`}
               onTransitionEnd={handleTransitionEnd}
          >
               <div>
                    <img
                         src={flags}
                         alt={`Flag of ${name}`}
                         className={styles.cardImage}
                         onError={(e) => console.error(`Error loading image: ${flags}`, e)}
                    />
               </div>
               <h3 className={styles.cardTitle}>{name}</h3>
               <h5 className={styles.cardSubtitle}>{continents}</h5>

               <Link to={`/countries/${id}`}>
                    <button className={styles.cardButton}>Ver Más</button>
               </Link>
          </div>
     );
}

Card.propTypes = {
     flags: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     continents: PropTypes.arrayOf(PropTypes.string).isRequired,
     id: PropTypes.string.isRequired,
};