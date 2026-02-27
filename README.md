# 🚀 User Service API

API RESTful para gerenciamento de usuários, desenvolvida com **Node.js**, **Express**, **Prisma ORM** e **MongoDB Atlas**.

Este serviço é responsável por operações completas de **CRUD (Create, Read, Update, Delete)** e pode ser utilizado por múltiplos projetos frontend.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB Atlas
- CORS
- JavaScript (ESModules)

---

## 📦 Funcionalidades

✔ Criar usuário  
✔ Listar usuários  
✔ Atualizar usuário  
✔ Deletar usuário  
✔ Tratamento de erros com Prisma  
✔ Validação de email único  
✔ Integração com frontend via CORS

---

## 📁 Estrutura do Projeto

```
.
├── prisma/
│   └── schema.prisma
├── server.js
├── package.json
└── .env
```

---

## 🗄️ Modelagem do Banco (Prisma Schema)

```prisma
model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   Int?
}
```

---

## 🔗 Endpoints da API

### ➤ Criar usuário

**POST** `/usuarios`

Body:

```json
{
  "email": "usuario@email.com",
  "name": "Leandro",
  "age": 25
}
```

Resposta:

```json
{
  "success": true,
  "data": { ... }
}
```

---

### ➤ Listar usuários

**GET** `/usuarios`

Resposta:

```json
{
  "success": true,
  "data": [ ... ]
}
```

---

### ➤ Atualizar usuário

**PUT** `/usuarios/:id`

Body:

```json
{
  "email": "novo@email.com",
  "name": "Novo Nome",
  "age": 30
}
```

---

### ➤ Deletar usuário

**DELETE** `/usuarios/:id`

Resposta:

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

## ⚠️ Tratamento de Erros

- `409` → Email já cadastrado (Prisma P2002)
- `404` → Usuário não encontrado (Prisma P2025)
- `500` → Erro interno do servidor

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/nomeDoBanco"
```

---

## ▶️ Como rodar o projeto

### 1️⃣ Instalar dependências

```
npm install
```

### 2️⃣ Gerar o Prisma Client

### 🗄️ Configuração do Prisma

#### 1️⃣ Sincronizar o banco com o schema

Após qualquer alteração no `schema.prisma`, execute:

```
npx prisma db push
```

Este comando sincroniza o schema com o MongoDB, criando ou atualizando as coleções.

---

#### 2️⃣ Gerar o Prisma Client

Depois de sincronizar o banco, gere o client:

```
npx prisma generate
```

Este comando atualiza o Prisma Client utilizado pela aplicação.

---

#### 3️⃣ Visualizar dados no Prisma Studio (opcional)

Para visualizar e gerenciar os dados pelo navegador:

```
npx prisma studio
```

## Isso abrirá uma interface gráfica para inspeção do banco de dados.

## 🌐 Integração

Esta API pode ser utilizada por aplicações frontend como:

- cadastro-usuario
- cadastro-usuario-2
- outros projetos que consumam REST API

---

## 🧠 Conceitos Aplicados

- Arquitetura REST
- Separação entre Frontend e Backend
- ORM com Prisma
- Conexão com banco NoSQL (MongoDB)
- Tratamento de erros baseado em códigos do Prisma
- Middleware com Express
- Controle de CORS
- Estrutura reutilizável para múltiplos projetos

---

## 📌 Autor

Desenvolvido por **Leandro Oliota**  
Fullstack Developer
