import express from 'express';
import {
        get_movie_list,
        create_movie,
        update_movie,
        delete_movie
    } from '../controllers/movies_controllers.js';

const router = express.Router();

router.get("/", get_movie_list);

router.post("/", create_movie);

router.put("/:_id", update_movie);

router.delete("/:_id", delete_movie);

export default router;