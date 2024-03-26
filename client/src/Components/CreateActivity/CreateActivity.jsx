import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, createActivity } from "../../Redux/actions";
import styles from './CreateActivity.module.css';

// Validation function for form input
function validate(input) {
     let errors = {};
     const dif = Number(input.difficulty);
     const dur = Number(input.duration);
     const difficultyPattern = /^[1-5]$/;
     const durationPattern = /^(?:[1-9]|1[0-9]|2[0-4])$/;
     if (!input.name) errors.name = "Campo Necesario";
     else if (/[^A-Za-z0-9 ]+/g.test(input.name)) errors.name = 'Nombre no puede tener caracteres especiales o tildes';
     if (!input.difficulty) errors.difficulty = "Campo Necesario";
     else if (!difficultyPattern.test(input.difficulty)) errors.difficulty = "Debe ser un número entre 1 y 5";
     if (!input.duration) errors.duration = "Campo Necesario";
     else if (!durationPattern.test(input.duration)) errors.duration = "Debe ser un número entre 1 y 24";
     if (!input.season || input.season === "vacio") errors.season = "Campo Necesario";
     if (!input.countries || input.countries.length === 0) errors.countries = "Campo Necesario";
     return errors;
}

export default function CreateActivity() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const countries = useSelector((state) => state.country.countries); // Updated selector
     const [input, setInput] = useState({
          name: "",
          difficulty: "",
          duration: "",
          season: "",
          countries: [],
     });
     const [errors, setErrors] = useState({});

     useEffect(() => {
          // Fetch countries data when the component mounts
          dispatch(getAllCountries());
     }, [dispatch]);

     const handleChange = (e) => {
          const { name, value } = e.target;
          if (name === "difficulty" || name === "duration") {
               const numericValue = value.replace(/\D/g, '');
               setInput((prevState) => ({
                    ...prevState,
                    [name]: numericValue
               }));
               setErrors(validate({
                    ...input,
                    [name]: numericValue
               }));
          } else {
               setInput((prevState) => ({
                    ...prevState,
                    [name]: value
               }));
               setErrors(validate({
                    ...input,
                    [name]: value
               }));
          }
     };

     const handleSelect = (e) => {
          setInput((prevState) => {
               if (e.target.name === "countries") {
                    return {
                         ...prevState,
                         countries: [...prevState.countries, e.target.value]
                    };
               } else {
                    return {
                         ...prevState,
                         [e.target.name]: e.target.value
                    };
               }
          });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log('submit pressed');
          if (!isFormValid(input)) {
               return alert('Complete correctamente el formulario antes de enviarlo');
          }
          dispatch(createActivity(input));
          alert('Actividad Creada Exitosamente');
          resetForm();
          navigate('/home');
     };

     const isFormValid = (input) => {
          const { name, difficulty, duration, season, countries } = input;
          return name && difficulty && duration && season && countries && countries.length > 0;
     };

     const resetForm = () => {
          setInput({
               name: '',
               difficulty: '',
               duration: '',
               season: '',
               countries: [],
          });
     };

     const handleDelete = (e) => {
          setInput((prevState) => ({
               ...prevState,
               countries: prevState.countries.filter((con) => con !== e)
          }));
     };

     const handleClick = (e) => {
          e.preventDefault();
          navigate('/home');
     };

     return (
          <div>
               <div className={styles.container}>
                    <div className={styles.homeLogo}>
                         <Link to="/home">
                              <img
                                   onClick={(e) => handleClick(e)}
                                   src="/earth.png"
                                   alt="logo"
                              ></img>
                         </Link>
                    </div>
                    <div className={styles.card}>
                         <h2>Crea tu Actividad Turística</h2>
                         <form onSubmit={(e) => handleSubmit(e)}>
                              <div>
                                   <label>Nombre: </label>
                                   <input
                                        type="text"
                                        value={input.name}
                                        name="name"
                                        onChange={(e) => handleChange(e)}
                                   />
                                   {errors.name && (<p>{errors.name}</p>)}
                              </div>
                              <div>
                                   <label>Escoja el país para su actividad: </label>
                                   <select
                                        name="countries"
                                        id="countries"
                                        onChange={(e) => handleSelect(e)}
                                   >
                                        <option key="empty"> </option>
                                        {countries.map((con) => (
                                             <option key={con.id} value={con.id}>{con.name}</option>
                                        ))}
                                   </select>
                                   {errors.countries && (<p >{errors.countries}</p>)}
                              </div>
                              <div>
                                   <label>Temporada: </label>
                                   <select
                                        name="season"
                                        id="season"
                                        onChange={(e) => handleSelect(e)}
                                   >
                                        <option value="vacio"> </option>
                                        <option value={"Summer"}>Verano </option>
                                        <option value={"Winter"}>Invierno </option>
                                        <option value={"Spring"}>Primavera </option>
                                        <option value={"Autumn"}>Otoño </option>
                                   </select>
                                   {errors.season && (<p >{errors.season}</p>)}
                              </div>
                              <div>
                                   <label>Dificultad: </label>
                                   <input
                                        type="text"
                                        value={input.difficulty}
                                        name="difficulty"
                                        onChange={(e) => handleChange(e)}
                                   />
                                   {errors.difficulty && (<p>{errors.difficulty}</p>)}
                              </div>
                              <div>
                                   <label>Duración: </label>
                                   <input
                                        type="text"
                                        value={input.duration}
                                        name="duration"
                                        onChange={(e) => handleChange(e)}
                                   />
                                   <label> horas</label>
                                   {errors.duration && (<p>{errors.duration}</p>)}
                              </div>
                              <div>
                                   <button
                                        type="submit"
                                        disabled={Object.keys(errors).length === 0 ? false : true}
                                   >Añadir Actividad</button>
                              </div>
                         </form>
                         {input.countries.map((e) => (
                              <div key={e}>
                                   <p> {e} </p>
                                   <button onClick={() => handleDelete(e)}>X</button>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}
