<div align="center">
<p>
  <a href="https://www.soyhenry.com/">
    <img src="https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png"/>
  </a>
</p>
</div>

<div align="center">
  <h1>
    COUNTRIES | Web App Integrative Project
  </h1>
</div>

This is a fullstack web application called Countries, developed using the PERN stack (PostgreSQL, Express, React, Node.js). The main function of this application is to display a complete list of all countries in the world along with their respective flags. Additionally, it allows filtering countries by population and continent, and creating activities that are recorded in the database.

---
## **Description**

The application initially loads a lightweight version of the list of countries from a public API available at restcountries.com. This lightweight version is stored in the database and used to display the list of countries in the application. The backend of the application is implemented as a REST API, with models, controllers, routes, and middleware to handle the database configuration logic.

---

## **Technical Details**

- **Backend:** Uses Express for creating the server. Models, controllers, routes, and middleware are implemented to handle operations in the database.
- **Frontend:** Developed with React, it uses Redux to manage the application state and perform country filtering.
- **Validations:** Validations are applied both on the client side (JavaScript and HTML) and on the server side to ensure form integrity.
- **Modularization:** The code has been modularized to improve project maintainability and scalability.
---

## **Technologies Used**
- **Express:** For creating the backend server.
- **dotenv:** For loading environment variables from .env files.
- **Sequelize:** ORM for interacting with the PostgreSQL database.
- **Joi:** For data validation.
- **Axios:** For making HTTP requests from the frontend.
- **Nodemon:** For automatically restarting the server during development.
- **Concurrently:** For concurrently running the backend server and frontend - development server.
- **json-server:** Used to create a lightweight version of the country list for - subsequent loading into the database.

---
## **Usage Instructions**

1- **Clone this repository to your local machine using the following command:**
```
git clone https://github.com/your-username/countries-app.git
```
2- **Navigate to the project directory:**
```
cd countries-app
```
3- **Install dependencies using npm:**
```
npm install
```
4- **In the project root directory, create a .env file and configure the following environment variables:**
```
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
PORT=your_server_port
```
5- **Start the backend server and frontend development server simultaneously with the following commands:**
```
// Frontend: npm run dev
// Backend: npm start
```
---
<br>

This is a project for the Henry FullStack Bootcamp.

<br>

---

<div align="center">
  <h1>
    COUNTRIES | Web App Proyecto Integrador
  </h1>
</div>

Esta es una aplicación web fullstack llamada Countries, desarrollada utilizando el stack PERN (PostgreSQL, Express, React, Node.js). La función principal de esta aplicación es mostrar una lista completa de todos los países del mundo junto con sus respectivas banderas. Además, permite filtrar los países por población y continente, y crear actividades que quedan registradas en la base de datos.

---
## **Descripción**

La aplicación carga inicialmente una versión ligera de la lista de países desde una API pública disponible en restcountries.com. Esta versión ligera se almacena en la base de datos y se utiliza para mostrar la lista de países en la aplicación. El backend de la aplicación se implementa como una API REST, con modelos, controladores, rutas y middleware para manejar la lógica de configuración de la base de datos.

---

## **Detalles Técnicos**

- **Backend:** Utiliza Express para la creación del servidor. Se implementan modelos, controladores, rutas y middleware para gestionar las operaciones en la base de datos.
- **Frontend:** Desarrollado con React, utiliza Redux para gestionar el estado de la aplicación y realizar los filtros de países.
- **Validaciones:** Se aplican validaciones tanto en el lado del cliente (JavaScript y HTML) como en el lado del servidor para garantizar la integridad de los formularios.
- **Modularización:** El código se ha modularizado para mejorar la mantenibilidad y la escalabilidad del proyecto.
---

## **Tecnologías Utilizadas**
- **Express:** Para la creación del servidor backend.
- **dotenv:** Para cargar variables de entorno desde archivos .env.
- **Sequelize:** ORM para la interacción con la base de datos PostgreSQL.
- **Joi:** Para la validación de datos.
- **Axios:** Para realizar solicitudes HTTP desde el frontend.
- **Nodemon:** Para reiniciar automáticamente el servidor durante el desarrollo..
- **Concurrently:** Para ejecutar concurrentemente el servidor backend y el servidor de desarrollo del frontend.
- **json-server:** Utilizado para crear una versión ligera de la lista de países para su posterior carga en la base de datos.

---
## **Instrucciones de Uso**

1- **Clona este repositorio en tu máquina local utilizando el siguiente comando:**
```
git clone https://github.com/your-username/countries-app.git
```
2- **Accede al directorio del proyecto:**
```
cd countries-app
```
3- **Instala las dependencias utilizando npm:**
```
npm install
```
4- **En el directorio raíz del proyecto, crea un archivo .env y configura las siguientes variables de entorno:**
```
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
PORT=your_server_port
```
5- **Inicia el servidor backend y el servidor de desarrollo del frontend de forma simultánea con los siguientes comandos:**
```
// Frontend: npm run dev
// Backend: npm start
```
---
<br>
Este es un proyecto para el Henry FullStack Bootcamp.

