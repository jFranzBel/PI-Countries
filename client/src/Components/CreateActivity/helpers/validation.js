export function validate(input) {
     let errors = {};
     const dif = Number(input.difficulty);
     const dur = Number(input.duration);
     const difficultyPattern = /^[1-5]$/;
     const durationPattern = /^(?:[1-9]|1[0-9]|2[0-4])$/;
     if (!input.name) errors.name = "Campo Necesario";
     else if (/[^A-Za-z0-9 ]+/g.test(input.name)) errors.name = 'Nombre no puede tener caracteres especiales o tildes';
     if (!input.difficulty) errors.difficulty = "Campo Necesario";
     else if (!difficultyPattern.test(input.difficulty)) errors.difficulty = "Debe ser un número entre 1 and 5";
     if (!input.duration) errors.duration = "Campo Necesario";
     else if (!durationPattern.test(input.duration)) errors.duration = "Debe ser un número entre 1 and 24";
     if (!input.season || input.season === "vacio") errors.season = "Campo Necesario";
     if (!input.countries || input.countries.length === 0) errors.countries = "Campo Necesario";
     return errors;
}
