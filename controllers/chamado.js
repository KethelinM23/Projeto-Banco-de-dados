const db = require('../db');

exports.listar = (req, res) => {
  db.query('SELECT * FROM chamado', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.criar = (req, res) => {
  const { titulo, descricao, id_usuario, id_tecnico, id_categoria } = req.body;
  db.query(
    'INSERT INTO chamado (titulo, descricao, status, id_usuario, id_tecnico, id_categoria) VALUES (?, ?, ?, ?, ?, ?)',
    [titulo, descricao, 'Aberto', id_usuario, id_tecnico, id_categoria],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Chamado criado');
    }
  );
};

exports.atualizarStatus = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  db.query(
    'UPDATE chamado SET status = ? WHERE id_chamado = ?',
    [status, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send('Status atualizado');
    }
  );
};