const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://shauryasharmaiitb_db_user:Sha%402327@cluster0.tfwqtko.mongodb.net/user_app").then(() => console.log('connection established'));

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post('/sign-in', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: email});
    if (existingUser) {
        return res.status(400).send("User already exists !!")
    }else{
        const user = new User ({
            name: name, 
            email: email, 
            password: password});
            user.save().then(() => console.log("User Stored !!"));
    }
    
})

app.listen(3000);