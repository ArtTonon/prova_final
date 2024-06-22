import { Router } from "express";
import { JogadorController } from "../controllers/jogadorController";

const router = Router();
const jogadorController = new JogadorController();

router.get("/jogadores", jogadorController.all);
router.post("/jogadores", jogadorController.save);

export default router;
