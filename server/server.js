const express = require("express");
const mongoose = require("mongoose");
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
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/img"));

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
app.get("/user", UserController.get_all_users);
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
app.put("/user/:id", UserController.put_user);
// end update/put methods

//----------------------------------------------------------------------------------------------------------------------------

//delete methods
//admin
app.delete("/admin/:id", AdminController.delete_admin);
//bride
app.delete("/bride/:id", BrideController.delete_bride);
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
app.get("/admin/:username", AdminController.get_admin_by_username);
//end admin
//bride
app.get("/bride/:name", BrideController.get_bride_by_boutique_name);
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
app.get("/cosmeticSalon/:name", CosmeticSalonController.get_salon_by_name);
app.get(
  "/cosmeticSalon/:dateReserved",
  CosmeticSalonController.get_salon_when_reserved
);
//cosmeticSalon end
//dance lessons
app.get("/danceLessons/:name", DanceLessonsController.get_dance_studio_by_name);
app.get("/danceLessons/:name", DanceLessonsController.get_nearest_dance_studio);
//dance lessons end
//decoration
app.get("/decoration/:nmeOfTheStore", DecorationController.get_store_by_name);
//decoration end
//groom
app.get("/groom/:name", GroomController.get_groom_by_boutique_name);
//groom end
//jewellery
app.get(
  "/jewleryStore/:name",
  JewelleryStoreController.get_jewellery_store_by_name
);
//jewellery end
//music
app.get("/music/:nameOfTheBand", MusicController.get_band_by_name);
app.get("/music/:dateReserved", MusicController.get_band_when_reserved);
//music end
//other
app.get("/other/:nameOfTheStore", OtherController.get_store_by_name);
//other end
//photo studio
app.get("/photoStudio/:name", PhotoStudioController.get_studio_by_name);
app.get(
  "/photoStudio/:dateReserved",
  PhotoStudioController.get_studio_when_reserved
);
//photo studio end
//registrar
app.get("/registrar/:name", RegistrarController.get_registrar_by_name);
app.get(
  "/registrar/:dateReserved",
  RegistrarController.get_registrar_when_reserved
);
//registrar end
//restaurant
app.get("/restaurant/:name", RestaurantController.get_restaurant_by_name);
app.get(
  "/restaurant/:location",
  RestaurantController.get_restaurant_by_location
);
//restaurant end
//user
app.get("/user/:name", UserController.get_user_by_name);
app.delete("/user/:username", UserController.delete_user_by_username);
//user end

//end additional methods

//----------------------------------------------------------------------------------------------------------------------------

//route
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:admin@happily.qmtoszu.mongodb.net/Node-API?retryWrites=true&w=majority"
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

app.get("http://localhost:3000/user", (req, res) => {
  res.json({ message: "Hello from the server!" });
});
