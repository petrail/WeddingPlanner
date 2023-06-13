const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("./config/JWT");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
const fs = require("fs");
const BrideController = require("./controllers/bride");
const CakeController = require("./controllers/cake");
const ChatController = require("./controllers/chat");
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
const app = express();
const CosmeticSalonService = require("./models/service");
const Service = require("./models/service");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("img"));
app.use("/img", express.static("img"));
app.use(errorHandler);
app.use(cookieParser());
const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploads = multer({ dest: "img/" }).single("img");
//----------------------------------------------------------------------------------------------------------------------------
//post methods
//bride
app.post("/bride", BrideController.post_bride);
//cake
app.post("/cake", CakeController.post_cake);
//cosmeticSalon
app.post("/cosmeticSalon", CosmeticSalonController.post_salon);
//danceLessons
app.post("/danceLessons", DanceLessonsController.post_dance_lesson);
//decoration
app.post("/decoration", DecorationController.post_decoration);
//
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
//service
app.post("/service", ServiceController.post_service);

//user
app.post("/user", UserController.post_user);

//end post methods

//----------------------------------------------------------------------------------------------------------------------------

//all get methods
//bride
app.get("/bride", BrideController.get_all_brides);
//cake
app.get("/cake", CakeController.get_all_cakes);
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
//service
app.get("/service", async (req, res) => {
  try {
    const service = await Service.find({});
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//user
app.get("/users", UserController.get_all_users);
app.get("/user", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// end get all methods
//service
app.get("/service/get_display/:type", ServiceController.get_services_display);
app.get("/service/get_service_by_id/:id", ServiceController.get_service_by_id);
app.put("/service/add_service_review", ServiceController.add_service_review);
app.put(
  "/service/get_service_filtered",
  ServiceController.get_service_filtered
);
app.put(
  "/service/get_all_subcategories",
  ServiceController.get_all_subcategories
);
app.put("/service/add_reserve_date", ServiceController.add_reserve_date); //end service

//----------------------------------------------------------------------------------------------------------------------------

// update/put methods - ID
//bride
app.put("/bride/:id", BrideController.put_bride);
//cake
app.put("/cake/:id", CakeController.put_cake);
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
//other
app.put("/other/:id", OtherController.put_other);
//registrar
app.put("/registrar/:id", RegistrarController.put_registrar);
//restaurant
app.put("/restaurant/:id", RestaurantController.put_restaurant);
app.put("/other/:id", OtherController.put_other);
//srvice
app.put("/service/:id", ServiceController.put_service);
app.post("/service/get_services_by_ids", ServiceController.get_services_by_ids);
//chat
app.put("/chat/get_chat", ChatController.get_chat);
app.put("/chat/add_message", ChatController.add_message);
//user
app.put("/user/id/:id", UserController.put_user);
app.put("/user/add_liked", UserController.add_liked);
app.put("/user/add_reserved", UserController.add_reserved);
app.put("/user/remove_liked", UserController.remove_liked);
app.put("/user/get_users_with_ids", UserController.get_users_with_ids);
app.put("/user/filter_users_name", UserController.filter_users_name);
// end update/put methods

//----------------------------------------------------------------------------------------------------------------------------

//delete methods
//admin
//bride
app.delete("/bride/:id", BrideController.delete_bride);
//cake
app.delete("/cake/:id", CakeController.delete_cake);
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
//service
app.delete("/service/:id", ServiceController.delete_service_by_id);
//user
app.delete("/user/:id", UserController.delete_user);
//end delete methods

//----------------------------------------------------------------------------------------------------------------------------

//additional methods

//user
app.get("/users/name/:name", UserController.get_user_by_name);
app.get("/users/username/:username", UserController.get_user_by_username);
app.delete("/user/:username", UserController.delete_user_by_username);
app.delete("/user/id/:id", UserController.delete_user);
app.get("/users/id/:id", UserController.get_user_by_id);
app.put(
  "/users/:id/picture",
  upload.single("picture"),
  UserController.post_picture_for_user
);
app.get("/user/email/:email", UserController.get_user_by_email);

//user end
//end additional methods
//----------------------------------------------------------------------------------------------------------------------------
app.get("/search/filter/:price", async (req, res) => {
  const { price } = req.params;

  try {
    const filteredServices = await Service.find({
      "servicePrice.price": { $lte: parseInt(price) },
    });
    res.json(filteredServices);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the services." });
  }
});
app.get("/user/logout", async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
});
app.get("/search/:key", async (req, resp) => {
  let data = await Service.find({
    $or: [
      { name: { $regex: req.params.key } },
      { store: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.post("/user/register", UserController.registerUser);

app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("user creds");
    console.log(req.body);

    const user = await User.findOne({ email: email });

    if (!user) return res.status(400).json({ error: "User Doesn't Exist" });

    const dbPassword = user.password;
    const match = await bcrypt.compare(password, dbPassword);

    if (!match) {
      return res
        .status(400)
        .json({ error: "Wrong Username and Password Combination!" });
    } else {
      const accessToken = createTokens(user);

      res.cookie("access-token", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        //httpOnly: true,
      });
      req.user = user;
      return res.json(email);
    }
  } catch (error) {
    // Handle any errors that occur during the login process
    console.error(error);
    return res.status(500).json({ error: "An error occurred during login" });
  }
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
    "mongodb+srv://admin:admin@happily.qmtoszu.mongodb.net/Node-API?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected");
    app.listen(3000, () => {
      console.log("is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
