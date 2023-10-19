// const express = require("express");
// const app = express();
// const port = 5702; 
// const mongoose = require("mongoose");
// const dotenv = require("dotenv"); // Corrected the package name
// const authRoute = require("./routes/auth")

// dotenv.config(); // Corrected the configuration method

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("DB CONNECTION SUCCESSFUL")) // Removed the typo in the log message
// .catch((err) => {
//     console.log(err)});

//     app.use(express.json()); //because express didnt accept data in json

//     app.use("/api/auth", authRoute);  //calling routes

// app.listen(5702, () => {
//     console.log("Backend Server is running");
// });


const express = require('express');
const app = express();
const port = 5005;
const mongoose = require("mongoose");
const dontenv = require('dotenv')
const cors = require('cors')
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
// const data = require('./data');
const List = require('./models/List');
const Movie = require('./models/Movie');
const multer = require('multer');
const path = require('path');

app.use('/images/',express.static('uploads'));
app.use(cors())
dontenv.config('./.env')
console.log(process.env.MONGO_URL)

//function to connect with MongoDB
const connectTodb = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
      console.error(err);
    });

  app.use(express.json());

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/movies", movieRoute);
  app.use("/api/lists", listRoute);
}


// uploading file code start




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.array('file'), (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
console.log(req.files)
  const fileArray = []
  for (const iterator of req.files) {
    fileArray.push(`http://localhost:5005/images/${iterator.filename}`)
  }
  res.status(200).json({
    message : "File uploaded successfully !",
    urls : fileArray
  })
});


// uploadind file code end
app.listen(port, () => {
  // addList();
  connectTodb()
  console.log(`Server is running at http://localhost:${port}/`);
});