import express from 'express';
import {
        get_show_list,
        create_show,
        update_show,
        detele_show
    } from '../controllers/shows_controllers.js'

const router = express.Router();

router.get("/", get_show_list);

router.post("/", create_show);

router.put("/:_id", update_show);

router.delete("/:_id", detele_show);

export default router;