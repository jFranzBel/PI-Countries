import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css";
import {
     getAllCountries,
     filterByContinent,
     filterByActivity,
     sortByName,
     sortByPopulation,
     getAllActivities,
} from "../../Redux/actions";

export default function Home() {
     // State and Redux hooks
     const dispatch = useDispatch();
     const allCountries = useSelector((state) => state.country.countries) || [];
     const activities = useSelector((state) => state.allActivities);
     const nameSort = useSelector((state) => state.sorts.nameSort);
     const popSort = useSelector((state) => state.sorts.popSort);
     const continentFilter = useSelector((state) => state.filters.continentFilter);
     const activityFilter = useSelector((state) => state.filters.activityFilter);

     // Other state variables
     const [currentPage, setCurrentPage] = useState(1);
     const [countriesPerPage, setCountriesPerPage] = useState(12);
     const [selectedContinent, setSelectedContinent] = useState(continentFilter || "");
     const [selectedActivity, setSelectedActivity] = useState(activityFilter || "");

     // Create a new array that applies the filters and sorting
     let filteredAndSortedCountries = [...allCountries];

     // Apply continent filter
     // Apply continent filter
     if (continentFilter) {
          filteredAndSortedCountries = filteredAndSortedCountries.filter(country => country.continents && country.continents.map(continent => continent.trim().toLowerCase()).includes(continentFilter.trim().toLowerCase()));
     }



     // Apply activity filter
     if (activityFilter) {
          filteredAndSortedCountries = filteredAndSortedCountries.filter(country => country.activities.includes(activityFilter));
     }

     // Apply name sorting
     if (nameSort === 'asc') {
          filteredAndSortedCountries.sort((a, b) => a.name.localeCompare(b.name));
     } else if (nameSort === 'desc') {
          filteredAndSortedCountries.sort((a, b) => b.name.localeCompare(a.name));
     }

     // Apply population sorting
     if (popSort === 'asc') {
          filteredAndSortedCountries.sort((a, b) => a.population - b.population);
     } else if (popSort === 'desc') {
          filteredAndSortedCountries.sort((a, b) => b.population - a.population);
     }

     // Calculate pagination indexes
     const indexOfLastCountry = currentPage * countriesPerPage;
     const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
     const currentCountries = filteredAndSortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);

     // Pagination function
     const paginado = (pageNumber) => {
          setCurrentPage(pageNumber);
     };

     // Fetch data on component mount
     useEffect(() => {
          dispatch(getAllCountries());
          dispatch(getAllActivities());
          const uniqueContinents = [...new Set(allCountries.map(country => country.continent))];
          console.log('Unique continents:', uniqueContinents);
     }, [dispatch]);

     // Sorting Handlers
     const handleSortByName = (e) => {
          const sortingOrder = e.target.value === 'asc' ? 'asc' : 'desc';
          dispatch(sortByName(sortingOrder));
     };

     const handleSortByPopulation = (e) => {
          const sortingOrder = e.target.value === 'asc' ? 'asc' : 'desc';
          dispatch(sortByPopulation(sortingOrder));
     };

     // Filtering Handlers
     const handleFilterContinent = (e) => {
          const selectedContinent = e.target.value;
          setSelectedContinent(selectedContinent);
          dispatch(filterByContinent(selectedContinent));
     };

     const handleFilterActivity = (e) => {
          const selectedActivity = e.target.value;
          setSelectedActivity(selectedActivity);
          dispatch(filterByActivity(selectedActivity));
     };

     return (
          <div className={styles.mainContainer}>
               <div>
                    <NavBar setCurrentPage={setCurrentPage} />
               </div>
               <div className={styles.filtersRow}>
                    <div>
                         Orden Alfabético
                         <select onChange={handleSortByName} value={nameSort || ''}>
                              <option></option>
                              <option value="asc">A-Z</option>
                              <option value="desc">Z-A</option>
                         </select>
                    </div>
                    <div>
                         Número de Habitantes
                         <select onChange={handleSortByPopulation} value={popSort || ''}>
                              <option></option>
                              <option value="asc">Menor a Mayor</option>
                              <option value="desc">Mayor a Menor</option>
                         </select>
                    </div>
                    <div>
                         Busca por Continentes
                         <select onChange={handleFilterContinent} value={selectedContinent}>
                              <option value={"All"}> </option>
                              <option value={"South America"}>Sudamérica</option>
                              <option value={"North America"}>Norteamérica</option>
                              <option value={"Africa"}>África</option>
                              <option value={"Asia"}>Asia</option>
                              <option value={"Europe"}>Europa</option>
                              <option value={"Oceania"}>Oceanía</option>
                              <option value={"Antarctica"}>Antárctica</option>
                         </select>
                    </div>
                    <div>
                         Busca por Actividad
                         {Array.isArray(activities) && activities.length === 0 ? (
                              <p>No se han creado actividades</p>
                         ) : (
                              <select onChange={handleFilterActivity} value={selectedActivity}>
                                   <option value="none"></option>
                                   {Array.isArray(activities) &&
                                        activities.map((e) => (
                                             <option value={e.name} key={e.id}>
                                                  {e.name}
                                             </option>
                                        ))}
                              </select>
                         )}
                    </div>
               </div>
               <div className={styles.cardContainer}>
                    {/* Render cards */}
                    {currentCountries.length ? (
                         currentCountries.map((e) => {
                              console.log('Rendering country:', e);
                              return (
                                   <div key={e.id}>
                                        <Card flags={e.flags} name={e.name} continents={e.continents} id={e.id} />
                                   </div>
                              );
                         })
                    ) : (
                         <h1>no hay paises</h1>
                    )}
               </div>
               <div>
                    {/* Pagination */}
                    <Paginado countriesPerPage={countriesPerPage} allCountries={filteredAndSortedCountries.length} paginado={paginado} />
               </div>
          </div>
     );
}