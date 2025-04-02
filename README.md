# API Escola - Node.js + Express

## 🚀 Como usar

1. **Instalação**:
```bash
git clone [url]
npm install
cp .env.example .env
npx sequelize-cli db:migrate
npm start
```

2. **Rotas Principais**:
- `POST /tokens` - Login (gera JWT)
- `POST /users` - Cadastra usuário
- `POST /students` - Cadastra aluno [JWT]
- `POST /photos` - Upload de foto [JWT]

## 🛠 Tecnologias
- Node.js | Express | Sequelize
- JWT (Autenticação)
- Multer (Uploads)

## 📂 Estrutura
```
src/
├── controllers/
├── database/
├── middlewares/
├── routes/
└── uploads/
```
