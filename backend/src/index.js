const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const connection = () => {
    return mongoose.connect("mongodb+srv://Akhilesh:akhilesh123@cluster0.jiiht.mongodb.net/pagination?retryWrites=true&w=majority");
};

const usersController = require("./controllers/userController");

app.use("/users", usersController);

app.listen(3001, async () => {
    try {
        await connection();
        console.log("listening to the port 3001");
    } catch (error) {
        console.log(error.message);
    }
});