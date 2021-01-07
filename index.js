const express = require("express");
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}))




const PORT = "3000";


const Users = require('./src/users');


app.post("/users", (req, res) => {
    console.log("post users");

    let { fullname, username, password } = req.body
    let newUser = new Users({
        fullname, username, password
    });
    console.log("ddfdf");

    newUser.save((err) => {
        if (err) {
            res.send(`${err}`)
        } else {
            res.send("Success")
        }
    })

})

app.get("/users", (req,res)=> {
    let {fullname } = req.query;

    console.log(fullname);
})


app.listen(PORT, ()=> {
    console.log(`Server listens on ${PORT}`);
})