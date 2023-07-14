import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Connexion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/vision', {
  useNewUrlParser: true
});

//BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// Permet de rendre le dossier "public" accessible directement en get
app.use(express.static('public'));
/*
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});
*/
app.get('/', (req, res) => 
    res.send(`Serveur node et express sur port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Votre serveur est sur le port ${PORT}`)
);