#Bienvenido al mundo del desarrollo

Este proyecto se realiza utilizando una base de datos de peliculas, la cual se debe crear utilizando Express, Node.js y MongoAtlas y Postman.

Para realizar este proyecto se requiere de varias instalaciones y registros descritos a continuacion:

1. Debemos registrarnos en MongoDB Atlas, creamos nuestra primera base de datos.
1.1. Creamos los accesos para los usuarios en la base de datos,en este caso tenemos dos usuarios quienes podran crear, editar o modificar la informacion creada.
2. Creamos en nuestro ordenador una carpeta con la cual vamos a trabajar en Visual Studio Code, para ello necesitamos realizar la instalacion de Node.Js con el comando 
npm init --yes (comando que nos permite iniciar un nuevo proyecto en Node.Js), adicional vamos a utilizar el comando npm i express (este nos va a permitir trabajar con la biblioteca express), junto con el comando
npm i nodemon -D (instalaciones que necesitamos para poder trabajar de forma correcta). Junto con la instalacion de npm i dotenv (permite crear variables de ambiente).
una vez tenemos estas instalaciones vamos a crear una carpeta llamada SRC esta nos permite almacenar todos los archivos que vamos a crear y en el index.js vamos a traer las instalaciones necesarias
para el desarrollo de nuestro proyecto de la siguiente forma: 

![image](https://user-images.githubusercontent.com/114543688/221223593-62af7e56-9d9a-42a8-abc1-a400ff71154c.png)

3. Vamos a conectar nuestra aplicacion con MondoDB ATLAS para ellos necesitamos realizar la instalacion del modulo con el siguiente comando: npm i mongoose, esto con el fin de traer nuestra base de datos.
- Seguido de ello necesitamos crear el archivo .env (este nos permite relacionar lo que tenemos en MongoDB Atlas - Como variable de ambiente).

Seguido de esto vamos a crear una carpeta con nombre routes, de la siguiente forma:

![image](https://user-images.githubusercontent.com/114543688/221230678-0103deaf-38ad-4e64-bec4-495b1b155796.png)

Con esto vamos a crear rutas de Post, Put, Get, Delete. 

4. Vamos a crear un nuevo archivo llamado requests.hppt (Este nos permite crear enpoint).
![image](https://user-images.githubusercontent.com/114543688/221233029-0ef2aabe-3516-48a6-884c-8368db0f0c48.png)
5. Vamos a crear la carpeta models (crea el modelo por dato). Creamos el modelo, junto con el esquema como se muestra a continuacion: 
![image](https://user-images.githubusercontent.com/114543688/221233379-b7c6a104-f7c3-47a6-adc4-d4369e6c61b6.png)
Una vez empezamos añadir informacion nos damos cuenta que esta automaticamente esta actualizando el MondoDB Atlas.
![image](https://user-images.githubusercontent.com/114543688/221236401-8a7ad5df-febd-48e5-ab45-4c47b0ff8c25.png)







