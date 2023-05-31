const errorHandler = require("./middleware/errorHandler");
//const validateToken = require("./middleware/validateTokenHandler");
const cookieParser = require("cookie-parser");
const {createTokens, validateToken} = require("./JWT");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const multer = require("multer");
//const bcrypt = require("bcrypt");
const AdminController = require("./controllers/admin");
const BrideController = require("./controllers/bride");
const CakeController = require("./controllers/cake");
const CoordinatorController = require("./controllers/coordinator");
const CosmeticSalonController = require("./controllers/cosmeticSalon");
const DanceLessonsController = require("./controllers/danceLessons");
const DecorationController = require("./controllers/decoration");
const GroomController = require("./controllers/groom");
const JewelleryStoreController = require("./controllers/jewelleryStore");
const MusicController = require("./controllers/music");
const OtherController = require("./controllers/other");
const PhotoStudioController = require("./controllers/photoStudio");
const RegistrarController = require("./controllers/registrar");
const RestaurantController = require("./controllers/restaurant");
const UserController = require("./controllers/user");
const ServiceController = require("./controllers/service");
const User = require("./models/user");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
const app = express();
const cors = require("cors");

app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/img"));
app.use(errorHandler);
app.use(cookieParser());

/*
const passport = require("passport");
const flash = require("express-flash")
const session = require("express-session")
const inicializePassport = require('./passport-config')
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

inicializePassport(
  passport,
  email =>users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);*/





//----------------------------------------------------------------------------------------------------------------------------
//post methods
//admin
app.post("/admin", AdminController.post_admin);
//bride
app.post("/bride", BrideController.post_bride);
//cake
app.post("/cake", CakeController.post_cake);
//coordinator
app.post("/coordinator", CoordinatorController.post_coordinator);
//cosmeticSalon
app.post("/cosmeticSalon", CosmeticSalonController.post_salon);
//danceLessons
app.post("/danceLessons", DanceLessonsController.post_dance_lesson);
//decoration
app.post("/decoration", DecorationController.post_decoration);
//groom
app.post("/groom", GroomController.post_groom);
//jewellery
app.post("/jewleryStore", JewelleryStoreController.post_jewellery);
//music
app.post("/music", MusicController.post_music);
//other
app.post("/other", OtherController.post_other);
//photoStudio
app.post("/photoStudio", PhotoStudioController.post_photo_studio);
//registrar
app.post("/registrar", RegistrarController.post_registrar);
//restaurant
app.post("/restaurant", RestaurantController.post_restaurant);
//user
app.post("/user", UserController.post_user);

//end post methods

//----------------------------------------------------------------------------------------------------------------------------

//all get methods
//admin
app.get("/admin", AdminController.get_all_admins);
//bride
app.get("/bride", BrideController.get_all_brides);
//cake
app.get("/cake", CakeController.get_all_cakes);
//coordinator
app.get("/coordinator", CoordinatorController.get_all_coordinators);
//cosmeticSalon
app.get("/cosmeticSalon", CosmeticSalonController.get_all_salons);
//dance lessons
app.get("/danceLessons", DanceLessonsController.get_all_lessons);
//decoration
app.get("/decoration", DecorationController.get_all_decorations);
//groom
app.get("/groom", GroomController.get_all_grooms);
//jewellery
app.get("/jewleryStore", JewelleryStoreController.get_all_jewellerys);
//music
app.get("/music", MusicController.get_all_music);
//other
app.get("/other", OtherController.get_all_others);
//photoStudio
app.get("/photoStudio", PhotoStudioController.get_all_photoStudios);
//registrar
app.get("/registrar", RegistrarController.get_all_registrars);
//restaurant
app.get("/restaurant", RestaurantController.get_all_restaurants);
//user
app.get("/users", UserController.get_all_users);
// end get all methods
//service
app.get("/service/get_display", ServiceController.get_services_display);
app.get("/service/get_service_by_id/:id", ServiceController.get_service_by_id);
app.get("/service/add_service_review", ServiceController.add_service_review);
app.get("/service/add_reserve_date", ServiceController.add_reserve_date);
//end service

//----------------------------------------------------------------------------------------------------------------------------

// update/put methods - ID
//admin
app.put("/admin/:id", AdminController.put_admin);
//bride
app.put("/bride/:id", BrideController.put_bride);
//cake
app.put("/cake/:id", CakeController.put_cake);
//coordinator
app.put("/coordinator/:id", CoordinatorController.put_coordinator);
//cosmeticSalon
app.put("/cosmeticSalon/:id", CosmeticSalonController.put_salon);
//dance lessons
app.put("/danceLessons/:id", DanceLessonsController.put_dance_lesson);
//decoration
app.put("/decoration/:id", DecorationController.put_decoration);
//groom
app.put("/groom/:id", GroomController.put_groom);
//jewellery
app.put("/jewleryStore/:id", JewelleryStoreController.put_jewellery);
//music
app.put("/music/:id", MusicController.put_music);
//photoStudio
app.put("/photoStudio/:id", PhotoStudioController.put_photo_studio);
//registrar
app.put("/registrar/:id", RegistrarController.put_registrar);
//restaurant
app.put("/restaurant/:id", RestaurantController.put_restaurant);
//user
app.put("/user/id/:id", UserController.put_user);
// end update/put methods

//----------------------------------------------------------------------------------------------------------------------------

//delete methods
//admin
app.delete("/admin/:id", AdminController.delete_admin);
//bride
app.delete("/bride/:id", BrideController.delete_bride );
//cake
app.delete("/cake/:id", CakeController.delete_cake);
//coordinator
app.delete("/coordinator/:id", CoordinatorController.delete_coordinator);
//cosmeticSalon
app.delete("/cosmeticSalon/:id", CosmeticSalonController.delete_cosmetic_salon);
//danceLessons
app.delete("/danceLessons/:id", DanceLessonsController.delete_dance_lesson);
//decoration
app.delete("/decoration/:id", DecorationController.delete_decoration);
//groom
app.delete("/groom/:id", GroomController.delete_groom);
//jewellery
app.delete("/jewleryStore/:id", JewelleryStoreController.delete_jewellery);
//music
app.delete("/music/:id", MusicController.delete_music);
//other
app.delete("/other/:id", OtherController.delete_other);
//photoStudio
app.delete("/photoStudio/:id", PhotoStudioController.delete_photo_studio);
//registrar
app.delete("/registrar/:id", RegistrarController.delete_registrar);
//restaurant
app.delete("/restaurant/:id", RestaurantController.delete_restaurant);
//user
app.delete("/user/:id", UserController.delete_user);
//end delete methods

//----------------------------------------------------------------------------------------------------------------------------

//additional methods
//admin
app.get("/admin/username/:username", AdminController.get_admin_by_username);
//end admin

//coordinator
app.get(
  "/coordinator/:username",
  CoordinatorController.get_coordinator_by_username
);
//coordinator end

//user
app.get("/users/name/:name", UserController.get_user_by_name);
app.get("/users/username/:username", UserController.get_user_by_username);
app.delete("/user/:username", UserController.delete_user_by_username);
app.delete("/user/id/:id", UserController.delete_user);
app.get("/users/id/:id", UserController.get_user_by_id);
app.post(
  "/user/upload",
  upload.single("image"),
  UserController.post_picture_for_user
);
//user end
//end additional methods
//----------------------------------------------------------------------------------------------------------------------------

//app.post('/user/login', UserController.loginUser)

app.post('/user/register', UserController.registerUser);


//app.get('/user/current', validateToken, UserController.currentUser);
app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email: email });

  if (!user) res.status(400).json({ error: "User Doesn't Exist" });

  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res
        .status(400)
        .json({ error: "Wrong Username and Password Combination!" });
    } else {
      const accessToken = createTokens(user);

      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        //httpOnly: true,
      });

      res.json("LOGGED IN");
    }
  });
});

app.get("/user/current", validateToken, (req, res) => {
  const currentUser = req.user;
  if (!currentUser) {
    return res.status(400).json({ error: "User not Authenticated!" });
  }
  res.json(currentUser);
});



//route
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:admin@happily.qmtoszu.mongodb.net/Node-API?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected");
    app.listen(3000, () => {
      console.log("App is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
