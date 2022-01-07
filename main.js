const express = require("express");
const app = express();
app.use(express.json());
const { selectAlluser, adduser } = require("./user");



app.get("/path", async (req, res) => {
    let list = await selectAlluser();
    res.json(list);
});

app.post("/path1", async (req, res) => {
    const result = req.body;
    await addUser(user);
    res.json("user added succesfully ");
});

app.listen(4000, () => { console.log("server started") });