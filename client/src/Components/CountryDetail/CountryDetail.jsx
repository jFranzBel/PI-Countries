import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById, getActivityIdsByCountryId, getActivityById } from "../../Redux/actions";
import styles from "./CountryDetail.module.css";

const CountryDetail = () => {
     const dispatch = useDispatch();
     const { id } = useParams();
     const country = useSelector((state) => state.country.detail);
     const activities = useSelector((state) => state.activity.activities);
     const navigate = useNavigate();

     useEffect(() => {
          dispatch(getCountryById(id));
          dispatch(getActivityIdsByCountryId(id));
     }, [dispatch, id]);

     useEffect(() => {
          // Check if activityIds are available
          if (country?.activityIds) {
               // Dispatch action to get activity details by ids
               dispatch(getActivityById(country.activityIds));
          }
     }, [dispatch, country]);

     const handleClick = (e) => { e.preventDefault(); navigate("/home") };

     return (
          <div className={styles.container}>
               <Link to="/home" className={styles.link}>
                    <img onClick={(e) => handleClick(e)} src="/earth.png" alt="logo" />
               </Link>
               <h2 className={styles.title}>Detalles del País</h2>
               <div className={styles.detailContainer}>
                    <img src={country?.flags} alt="Imagen no disponible" className={styles.imgFlag} />
                    <div className={styles.detailsSection}>
                         <h2 className={styles.detailsTitle}>{country?.name}</h2>
                         <p className={styles.detailItem}>{country?.continents?.join(", ")}</p>
                         <p className={styles.detailItem}>{country?.id}</p>
                         <p className={styles.detailItem}>Capital: {country?.capital}</p>
                         <p className={styles.detailItem}>Región: {country?.subregion}</p>
                         <p className={styles.detailItem}>Área: {country?.area} km²</p>
                         <p className={styles.detailItem}>Población: {country?.population} Hab.</p>
                    </div>
                    <div className={styles.activitiesSection}>
                         <h3 className={styles.activitiesTitle}>Actividades del País</h3>
                         {activities && activities.length ? (
                              activities.map((activity) => (
                                   <div key={activity.id}>
                                        <h4 className={styles.detailItem}>{activity.name}</h4>
                                        <p className={styles.activityDetail}>Dificultad: {activity.difficulty}</p>
                                        <p className={styles.activityDetail}>Duración: {activity.duration} horas</p>
                                        <p className={styles.activityDetail}>Temporada: {activity.season}</p>
                                   </div>
                              ))
                         ) : (
                              <p className={styles.detailItem}>No existen actividades en este país</p>
                         )}
                         <Link to="/activities">
                              <button className={styles.button}>Crear Actividad</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default CountryDetail;
