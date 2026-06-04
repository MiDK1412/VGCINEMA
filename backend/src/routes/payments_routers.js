import express from 'express';
import { create_payment,
         get_payment_methods
        } from "../controllers/payments_controllers.js"

const router = express.Router();

router.get("/methods", get_payment_methods);

router.post("/",create_payment);

export default router;