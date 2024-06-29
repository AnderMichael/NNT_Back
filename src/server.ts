import express from 'express';
import userRoutes from './routes/userRoutes';
import db_initialization from './config/mongoInit';
import { server_port } from './config/vars';

const app = express();
const port = server_port;

app.use(express.json());

db_initialization();

app.use('/api/v1', userRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

