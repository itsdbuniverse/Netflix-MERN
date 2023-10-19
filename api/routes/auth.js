const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js"); //we use this so that our password get encrypted
const jwt = require("jsonwebtoken")


//REGISTER
router.post("/register", async (req, res) => {
    console.log("called", req.body)
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY,
            { expiresIn : "365d"}
        ).toString(),
    });//in this way we can decrypt our password & this is why it is showing something encrypted data as a password in postman


    try {
        const user = await newUser.save();
        return res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }

});


//LOGIN
// router.post("/login", async (req,res)=> {
//     try{
//         console.log(req.body , "Login called")
//         const user = await User.findOne({ email: req.body.email });
//         !user && res.status(401).json("Wrong username or password")

//         const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
//         const originalPassword = bytes.toString(CryptoJS.enc.Utf8);   //used this to decrypt the password into normal form copied from google


//         originalPassword !== req.body.password &&
//         return res.status(401).json("Wrong username or password");

//         const accessToken = jwt.sign(
//             {_id : user._id, isAdmin: user.isAdmin },
//             process.env.SECRET_KEY,
//             { expiresIn: "365d" }
//         )

//         const {password, ...info} = user._doc; //used spread operator to hide password from API

//         res.status(200).json({...info , accessToken});
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

router.post("/login", async (req, res) => {
    try {
        console.log(req.body, "Login called");
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("Wrong username or password");
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        console.log(originalPassword, req.body.password)
        if (originalPassword != req.body.password) {
            return res.status(401).json("Wrong username or password"); // Use 'return' here
        }

        const accessToken = jwt.sign(
            { _id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "365d" }
        );

        const { password, ...info } = user._doc;

        return res.status(200).json({ ...info, accessToken }); // Use 'return' here
    } catch (err) {
        return res.status(500).json(err); // Use 'return' here
    }
});

module.exports = router;