import express from 'express';
import { get_account_list,
        create_account,
        forgot_password, 
        reset_password,
        detele_account } from '../controllers/accounts_controllers.js';

const router = express.Router();

router.get("/",get_account_list);

router.post("/",create_account);

router.put("/", forgot_password);

router.put("/:token", reset_password);

router.delete("/:id", detele_account);

export default router;