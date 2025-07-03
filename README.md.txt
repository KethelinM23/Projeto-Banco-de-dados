Sistema de Controle de Chamados 

Projeto desenvolvido como parte do curso de Análise e Desenvolvimento de Sistemas, da disciplina de Imersão Profissional: Projeto de Banco de Dados. O sistema simula um ambiente de suporte técnico onde usuários podem abrir chamados, que são atribuídos a técnicos e classificados por categorias.

---

Funcionalidades

- Abertura de chamados com título e descrição
- Atribuição de técnico e categoria ao chamado
- Listagem de todos os chamados existentes
- Atualização do status do chamado (Aberto → Em andamento → Concluído)
- Interface web simples para interação com o sistema

---
Tecnologias Utilizadas

Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [CORS](https://www.npmjs.com/package/cors)

Banco de Dados
- MySQL (via XAMPP + phpMyAdmin)

Frontend
- HTML
- CSS
- JavaScript (puro, sem frameworks)

Estrutura do Projeto

projeto/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   │   └── chamado.js
│   └── controllers/
│       └── chamado.js
│
├── frontend/
│   └── index.html
│
├── README.md


Como Executar Localmente

1. Banco de Dados

- Inicie o XAMPP e ative o MySQL e o Apache
- Acesse o phpMyAdmin via navegador
- Crie um banco de dados chamado: "sistema chamados"
- Execute o script SQL abaixo para criar as tabelas:

sql
CREATE TABLE USUARIO (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

CREATE TABLE TECNICO (
  id_tecnico INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

CREATE TABLE CATEGORIA (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE CHAMADO (
  id_chamado INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descricao TEXT NOT NULL,
  status VARCHAR(50) NOT NULL,
  id_usuario INT NOT NULL,
  id_tecnico INT,
  id_categoria INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario),
  FOREIGN KEY (id_tecnico) REFERENCES TECNICO(id_tecnico),
  FOREIGN KEY (id_categoria) REFERENCES CATEGORIA(id_categoria)
);

---

2. Backend (Node.js)

No terminal:

bash
cd backend
npm install
node server.js


Se tudo estiver correto, aparecerá:

Conectado ao MySQL
Servidor rodando na porta 3000


3. Frontend

Vá até a pasta "frontend/"
Dê dois cliques no "index.html"
A interface será aberta no navegador


Testes

Você pode usar o Postman ou a própria interface para testar:

Endpoints disponíveis:

GET /api/chamados` → listar chamados
POST /api/chamados` → criar novo chamado
PUT /api/chamados/:id` → atualizar status


Sobre o Projeto

Esse projeto foi inspirado no meu ambiente de trabalho como analista de suporte. A ideia foi simular um sistema real de chamados com funcionalidades simplificadas, aplicando conceitos de banco de dados, back-end e front-end aprendidos durante o curso.

Desenvolvido por:

Kethelin Matos da Luz
Imersão Profissional - Projeto de Banco de Dados - Uniasselvi

