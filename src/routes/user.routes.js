import express from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,

} from "../controllers/user.controller.js";
import {validate} from "../middlewares/validate.middleware.js";
import {createUserDTO, updateUserDTO} from "../dto/user.dto.js";
const router = express.Router();
router.get("/", getUsers);
router.post(
    "/",
    validate(createUserDTO),
    createUser,
);
router.post(

"/",
validate(createUserDTO),
createUser,
);
router.patch("/:id", validate(updateUserDTO), updateUser);
router.delete("/:id", deleteUser);
export default router;

// file defines all the api routes related to user
//its main purpose is to connect the controller with proper http routes