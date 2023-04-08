import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) => 
    res.send(`Serveur node et express sur port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Votre serveur est sur le port ${PORT}`)
);