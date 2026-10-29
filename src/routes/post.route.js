import express from "express";
import {
    listar,
    buscarPorId,
    criar,
    atualizar,
    excluir
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", criar);
router.get("/", listar);
router.get("/:id", buscarPorId);
router.put("/:id", atualizar);
router.delete("/:id", excluir);

export default router;