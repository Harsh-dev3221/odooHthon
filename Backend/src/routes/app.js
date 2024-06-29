const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../../../config');
const User = require('../models/User')
const bcrypt = require('bcryptjs')



const port = process.env.PORT || 8080;
const app = express();
const mongoURI = config.mongoURI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true // Enable credentials (cookies, authorization headers, etc.)
  }));

  const salt = bcrypt.genSaltSync(10)












app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    console.log(username, password);
})

app.post('/signup',async (req,res)=>{
    console.log("into signuo")
    const {email,username,password} = req.body;
    try {
        const hasedPassword = await bcrypt.hash(password, salt);
        const user = await  User.create(username,hasedPassword,email)
        console.log(user);

    } catch (error) {
        console.log(error)
    }


    // console.log(email,username,password)
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
