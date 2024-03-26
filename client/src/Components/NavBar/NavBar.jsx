import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCountries, getCountryByName } from "../../Redux/actions";
import styles from "./NavBar.module.css";


export default function NavBar({ setCurrentPage }) {

     const dispatch = useDispatch();
     const [name, setName] = useState("");

     // Fetch countries data when the component mounts
     useEffect(() => {
          dispatch(getAllCountries());
     }, [dispatch, name]);

     // Event handler for clicking the logo to reset countries
     const handleClick = (e) => {
          e.preventDefault();
          dispatch(getAllCountries());
     };

     // Event handler for input change to search for countries by name
     const handleInputChange = (e) => {
          const inputValue = e.target.value;
          setName(inputValue);
          // Trigger action to filter countries by name
          dispatch(getCountryByName(inputValue));
          // Reset the current page when searching
          setCurrentPage(1);
     };

     return (
          <div className={styles.navbar}>
               <div className={styles.logo}>
                    <Link to="/home">
                         <img
                              onClick={(e) => handleClick(e)}
                              src="/earth.png"
                              alt="logo"
                              className={styles.logoImage}
                         ></img>
                    </Link>
               </div>
               <div className={styles.centerContent}>
                    <div className={styles.textInputContainer}>
                         <div className={styles.text}>Encuentra Tu Próximo Destino</div>
                         <input
                              value={name}
                              type="text"
                              placeholder="Qué país deseas visitar..."
                              onChange={(e) => handleInputChange(e)}
                              className={styles.input}
                         />
                    </div>
               </div>
               <div className={styles.createActivity}>
                    <Link to="/activities">
                         <button className={styles.button}>Crear Actividad</button>
                    </Link>
               </div>
          </div>
     );
}