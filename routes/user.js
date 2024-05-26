const express=require("express");
const router= express.Router();

const {handleGetAllUser, getUserById, updateUserById, deleteUserById, createNewUser}= require("../Controller/user");

router.route("/").get(getUserById).post(createNewUser);

router.route("/:id")
.get(getUserById)
.delete(deleteUserById)
.patch(updateUserById)

module.exports= router;