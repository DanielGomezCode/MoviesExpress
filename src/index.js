const express = require('express');
const mongoose = require("mongoose")
require('dotenv').config();

// Rutas Links
const userRoutes = require("./routes/user")
const directionRoutes = require("./routes/direction")
const movieCastRoutes = require("./routes/movie_cast")
const directorRoutes = require("./routes/director")
const reviewerRoutes = require("./routes/reviewer")
const actorRoutes = require("./routes/actor")
const ratingRoutes = require("./routes/rating")
const genresRoutes = require("./routes/genres")
const movgenresRoutes = require("./routes/movie_genres")
const movieRoutes = require("./routes/movie")


const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json())
app.use('/api', userRoutes, directionRoutes, movieCastRoutes, directorRoutes, reviewerRoutes, actorRoutes, ratingRoutes, genresRoutes, movgenresRoutes, movieRoutes);


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my app')
});

//mongodb Conection
mongoose.connect(
    "mongodb+srv://Dani:dani2023@movies-brieft.iqk0gtc.mongodb.net/movies?retryWrites=true&w=majority"
)
.then(() => console.log('Contectado a la base de datos'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('servidor funcional', port));

