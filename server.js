/* //ANTIGO
const express = require("express"); 
Get -> listar; Post -> criar; Put -> editar vários; Patch -> Editar um; Delete -> deletar
*/

/* 
FAZER NOSSO CRUD
CREATE - OK
READ - OK
UPDATE - OK
DELETE - OK
*/

//NOVO
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors("http://localhost:5173/"));

// POST - CREATE
app.post("/usuarios", async (req, res) => {
  try {
    const { email, age, name } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        age,
        name,
      },
    });

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Email already in use",
      });
    }

    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// GET - READ
app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await prisma.user.findMany();

    return res.status(200).json({
      success: true,
      data: usuarios,
    });
  } catch (error) {
    console.error("Erro ao chamar usuário: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// PUT - Update (adicionando o ID  /:id)
app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name,
      },
    });

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// DELETE - delete (adicionando o ID  /:id)
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//ouvir na porta 3000 - http://localhost:3000
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log("Pressione CTRL+C para parar");
});
