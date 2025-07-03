const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const chamadoRoutes = require('./routes/chamado');

app.use(cors());
app.use(express.json());
app.use('/api/chamados', chamadoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});