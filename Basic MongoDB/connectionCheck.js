const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shauryasharmaiitb_db_user:Sha%402327@cluster0.tfwqtko.mongodb.net/user_app").then(() => console.log('connection established'));

const User = mongoose.model('Users', {name: String, email: String, password: String});

const user = new User ({name: 'Shaurya Sharma', email: 'shauryasofficial27@gmail.com', password: '123456'});
user.save().then(() => console.log("User Stored !!"));