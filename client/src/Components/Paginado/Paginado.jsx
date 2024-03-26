import React from "react";
import styles from "./Paginado.module.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
    
  // Calculate the number of pages based on countriesPerPage and allCountries
  const totalPages = Math.ceil(allCountries / countriesPerPage);

  // Create an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (

    <nav className={styles.nav}>
      <ul>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginado(number)}
            className={styles.button}
          >
            {number}
          </button>
        ))}
      </ul>
    </nav>

  );
};