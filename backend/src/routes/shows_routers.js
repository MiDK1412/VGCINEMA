import express from 'express';
import {
        get_show_list,
        create_show,
        detele_show,
        update_show_status
    } from '../controllers/shows_controllers.js'

const router = express.Router();

router.get("/", get_show_list);

router.post("/", create_show);

router.put("/:_id", update_show_status);

router.delete("/:_id", detele_show);

export default router;