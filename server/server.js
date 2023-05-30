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
app.post("/danceLessons", DanceLessonsController.post_dance_lessons);
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
app.get("/music", MusicController.get_all_bands);
//other
app.get("/other", OtherController.get_all_other);
//photoStudio
app.get("/photoStudio", PhotoStudioController.get_all_photoStudios);
//registrar
app.get("/registrar", RegistrarController.get_all_registrars);
//restaurant
app.get("/restaurant", RestaurantController.get_all_restaurants);
//user
app.get("/users", UserController.get_all_users);
// end get all methods

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
app.put("/danceLessons/:id", DanceLessonsController.put_dance_lessons);
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
app.delete("/brides/id/:id", BrideController.delete_bride_by_id );
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
//bride
app.get("/brides/name/:name", BrideController.get_bride_by_boutique_name);

app.get(
  "/brides/location/:location",
  BrideController.get_bride_boutiqe_by_location
);
app.get("/brides/:price", BrideController.get_bride_boutiqe_by_price);
//end bride
//cake
app.get("/cake/:nameOfTheWafery", CakeController.get_wafery_by_name);
//cake end
//coordinator
app.get(
  "/coordinator/:username",
  CoordinatorController.get_coordinator_by_username
);
//coordinator end
//cosmeticSalon
//testing in postman: http://localhost:3000/cosmeticSalon/Ivan
app.get("/cosmeticSalon/:name", CosmeticSalonController.get_salon_by_name);
//testing in postman: http://localhost:3000/cosmeticSalon/location/Berlin
app.get(
  "/cosmeticSalon/location/:location",
  CosmeticSalonController.get_salon_by_location
);
//testing in postman: http://localhost:3000/cosmeticSalon/dateReserved/2023-12-04T23:00:00.000Z
app.get(
  "/cosmeticSalon/dateReserved/:dateReserved",
  CosmeticSalonController.get_salon_when_reserved
);
/*app.get(
  "/salons/typeOfService/:typeOfService",
  CosmeticSalonController.get_salon_by_service
);*/
//cosmeticSalon end

//dance lessons
//testing in postman: http://localhost:3000/danceLessons/Plesni Klub Primavera
app.get("/danceLessons/:name", DanceLessonsController.get_dance_studio_by_name);
//testing in postman: http://localhost:3000/danceLessons/location/9. brigade 39a
app.get(
  "/danceLessons/location/:location",
  DanceLessonsController.get_dance_studio_by_location
);
//dance lessons end

//decoration
//testing in postman: http://localhost:3000/decoration/Neven
app.get("/decoration/:nameOfTheStore", DecorationController.get_store_by_name);
//testing in postman: http://localhost:3000/decorations/300
app.get("/decorations/:price", DecorationController.get_decoration_by_price);
//testing in postman: http://localhost:3000/decoration/typeOfService/bidermajer
app.get(
  "/decoration/typeOfService/:typeOfService",
  DecorationController.get_decoration_by_service
);
//decoration end

//groom
//testing in postman: http://localhost:3000/groom/Massimo Dutti
app.get("/groom/:name", GroomController.get_groom_by_boutique_name);
//testing in postman: http://localhost:3000/groom/location/Pobedina 3
app.get(
  "/groom/location/:location",
  GroomController.get_groom_boutiqe_by_location
);
//testing in postman: http://localhost:3000/groom/price/2000
app.get("/groom/price/:price", GroomController.get_groom_boutiqe_by_price);
//groom end

//jewellery
//testing in postman:http://localhost:3000/jewleryStore/Zlatara Unca
app.get(
  "/jewleryStore/:name",
  JewelleryStoreController.get_jewellery_store_by_name
);
//testing in postman: http://localhost:3000/jewellery/location/Delta Planet
app.get(
  "/jewellery/location/:location",
  JewelleryStoreController.get_jewellery_shop_by_location
);
//testing in postman: http://localhost:3000/jewleryStore/typeOfJewlery/ogrlica
app.get(
  "/jewleryStore/typeOfJewlery/:typeOfJewlery",
  JewelleryStoreController.get_jewellery_by_service
);
//jewellery end
//music
//testing in postman: http://localhost:3000/music/Blackerries Band
app.get("/music/:nameOfTheBand", MusicController.get_band_by_name);
//testing in postman: http://localhost:3000/music/dateReserved/2023-12-31T23:00:00.000Z
app.get(
  "/music/dateReserved/:dateReserved",
  MusicController.get_band_when_reserved
);
//testing in postman:
/*app.get(
  "/music/typeOfService/:typeOfService",
  MusicController.get_music_by_service
);*/
//music end
//other
//testing in postman: http://localhost:3000/other/Diskoteka
app.get("/other/:nameOfTheStore", OtherController.get_store_by_name);
//testing in postman: http://localhost:3000/other/typeOfService/baloni
app.get(
  "/other/typeOfService/:typeOfService",
  OtherController.get_other_by_service
);

app.get("/other/location/:location", OtherController.get_other_by_location);
//other end

//photo studio
//testing in postman: http://localhost:3000/photoStudio/FotoStudio Zivko
app.get("/photoStudio/:name", PhotoStudioController.get_studio_by_name);
app.get(
  "/photoStudio/dateReserved/:dateReserved",
  PhotoStudioController.get_studio_when_reserved
);
//photo studio end
//registrar
//testing in postman: http://localhost:3000/registrar/Milan
app.get("/registrar/:name", RegistrarController.get_registrar_by_name);
//testing in postman: http://localhost:3000/registrar/dateReserved/2023-12-04T23:00:00.000Z
app.get(
  "/registrar/dateReserved/:dateReserved",
  RegistrarController.get_registrar_when_reserved
);
//testing in postman: http://localhost:3000/registrar/price/250
app.get("/registrar/price/:price", RegistrarController.get_registrar_by_price);
//testing in postman: http://localhost:3000/registrar/township/Pantelej
app.get(
  "/registrar/township/:township",
  RegistrarController.get_registrar_by_township
);
//registrar end

//restaurant
//testing in postman:
app.get("/restaurant/:name", RestaurantController.get_restaurant_by_name);
//testing in postman: http://localhost:3000/restaurant/location/Novo selo
app.get(
  "/restaurant/location/:location",
  RestaurantController.get_restaurant_by_location
);
app.get(
  "/restaurant/dateReserved/:dateReserved",
  RestaurantController.get_restaurant_when_reserved
);
app.get(
  "/restaurant/maxNumberGuests/:maxNumberGuests",
  RestaurantController.get_restaurant_by_guests_number
);
//testing in postman: http://localhost:3000/restaurants/15
app.get(
  "/restaurants/:priceMenu",
  RestaurantController.get_restaurant_by_menu_price
);
//restaurant end
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

