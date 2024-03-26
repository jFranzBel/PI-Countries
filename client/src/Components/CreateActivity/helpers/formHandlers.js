export function handleChange(input, setInput, setErrors, e) {
     const { name, value } = e.target;
     if (name === "difficulty" || name === "duration") {
          const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
          setInput({ ...input, [name]: numericValue });
          setErrors(validate({ ...input, [name]: numericValue }));
     } else {
          setInput({ ...input, [name]: value });
          setErrors(validate({ ...input, [name]: value }));
     }
}

export function handleSelect(input, setInput, e) {
     setInput((estado) => {
          if (e.target.name === "countries") {
               return {
                    ...estado,
                    countries: [...estado.countries, e.target.value]
               };
          } else {
               return {
                    ...estado,
                    [e.target.name]: e.target.value
               };
          }
     });
}

export function handleSubmit(input, resetForm, navigate, dispatch) {
     const { name, difficulty, duration, season, countries } = input;
     if (!(name && difficulty && duration && season && countries && countries.length > 0)) {
          alert('Complete correctamente el formulario antes de enviarlo');
          return;
     }
     dispatch(postActivity(input));
     alert('Actividad Creada Exitosamente');
     resetForm();
     navigate('/home');
}

export function resetForm(setInput) {
     setInput({
          name: '',
          difficulty: '',
          duration: '',
          season: '',
          countries: [],
     });
}

export function handleDelete(input, setInput, e) {
     setInput({ ...input, countries: input.countries.filter((con) => con !== e) });
}

export function handleClick(e, navigate) {
     e.preventDefault();
     navigate('/home');
}
