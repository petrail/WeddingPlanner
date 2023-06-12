const errorHandler = require("./middleware/errorHandler");
//const validateToken = require("./middleware/validateTokenHandler");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("./config/JWT");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
//const bcrypt = require("bcrypt");
const fs = require("fs");
const AdminController = require("./controllers/admin");
const BrideController = require("./controllers/bride");
const CakeController = require("./controllers/cake");
const ChatController = require("./controllers/chat");
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
const app = express();
const CosmeticSalonService = require("./models/service");
const Music = require("./models/service");
const CakeService = require("./models/service");
const DanceLessonsService = require("./models/service");
const DecorationService = require("./models/service");
const OtherService = require("./models/service");
const RestaurantService = require("./models/service");
const Service = require("./models/service");
const cors = require("cors");
// const path = require('path');
// const { URL } = require('url');

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

// const http = require("http").Server(app);
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

/*const storagee = multer.diskStorage({
  destination: "img",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});*/
//const uploads = multer({ storagee }).single("img");

const uploads = multer({ dest: "img/" }).single("img");

app.put("/upload/:id", (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const salon = await CosmeticSalonService.findById(id);

      if (!salon) {
        return res
          .status(404)
          .json({ message: `Cosmetic salon with id ${id} not found` });
      }

      // Read the uploaded image file
      const filePath = `img/${req.file.filename}`;
      const imgData = fs.readFileSync(filePath);
      const imgContentType = req.file.mimetype;

      // Update the img field in the salon document
      salon.img = {
        data: imgData,
        contentType: imgContentType,
      };

      // Save the updated salon document
      await salon.save();

      const updatedSalon = await CosmeticSalonService.findById(id);
      res.status(200).json(updatedSalon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});
app.put("/uploads/other/:id", (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const other = await OtherService.findById(id);

      if (!other) {
        return res
          .status(404)
          .json({ message: `Other with id ${id} not found` });
      }

      // Read the uploaded image file
      const filePath = `img/${req.file.filename}`;
      const imgData = fs.readFileSync(filePath);
      const imgContentType = req.file.mimetype;

      // Update the img field in the salon document
      other.img = {
        data: imgData,
        contentType: imgContentType,
      };

      // Save the updated salon document
      await other.save();

      const updatedOther = await OtherService.findById(id);
      res.status(200).json(updatedOther);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});
app.put("/uploads/music/:id", (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const music = await Music.findById(id);

      if (!music) {
        return res
          .status(404)
          .json({ message: `Music with id ${id} not found` });
      }

      // Read the uploaded image file
      const filePath = `img/${req.file.filename}`;
      const imgData = fs.readFileSync(filePath);
      const imgContentType = req.file.mimetype;

      // Update the img field in the salon document
      music.img = {
        data: imgData,
        contentType: imgContentType,
      };

      // Save the updated salon document
      await music.save();

      const updatedMusic = await Music.findById(id);
      res.status(200).json(updatedMusic);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

app.put("/uploads/danceLessons/:id", (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const dance = await DanceLessonsService.findById(id);

      if (!dance) {
        return res
          .status(404)
          .json({ message: `Dance with id ${id} not found` });
      }

      // Read the uploaded image file
      const filePath = `img/${req.file.filename}`;
      const imgData = fs.readFileSync(filePath);
      const imgContentType = req.file.mimetype;

      // Update the img field in the salon document
      dance.img = {
        data: imgData,
        contentType: imgContentType,
      };

      // Save the updated salon document
      await dance.save();

      const updatedDance = await DanceLessonsService.findById(id);
      res.status(200).json(updatedDance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

app.put("/uploads/decoration/:id", (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const decoration = await DecorationService.findById(id);

      if (!decoration) {
        return res
          .status(404)
          .json({ message: `Decoration with id ${id} not found` });
      }

      const filePath = `img/${req.file.filename}`;
      const imgData = fs.readFileSync(filePath);
      const imgContentType = req.file.mimetype;

      decoration.img = {
        data: imgData,
        contentType: imgContentType,
      };

      await decoration.save();

      const updatedDecoration = await DecorationService.findById(id);
      res.status(200).json(updatedDecoration);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

app.put("/uploads/cake/:id", (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const cake = await CakeService.findById(id);

      if (!cake) {
        return res
          .status(404)
          .json({ message: `Cake with id ${id} not found` });
      }

      // Read the uploaded image file
      const filePath = `img/${req.file.filename}`;
      const imgData = fs.readFileSync(filePath);
      const imgContentType = req.file.mimetype;

      // Update the img field in the salon document
      cake.img = {
        data: imgData,
        contentType: imgContentType,
      };

      // Save the updated salon document
      await cake.save();

      const updatedCake = await CakeService.findById(id);
      res.status(200).json(updatedCake);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});
app.put("/upload/restaurant/:id", (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const restaurant = await RestaurantService.findById(id);

      if (!restaurant) {
        return res
          .status(404)
          .json({ message: `Restaurant with id ${id} not found` });
      }

      // Read the uploaded image file
      const filePath = `img/${req.file.filename}`;
      const imgData = fs.readFileSync(filePath);
      const imgContentType = req.file.mimetype;

      // Update the img field in the salon document
      restaurant.img = {
        data: imgData,
        contentType: imgContentType,
      };

      // Save the updated salon document
      await restaurant.save();

      const updatedRestaurant = await RestaurantService.findById(id);
      res.status(200).json(updatedRestaurant);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});
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
/*app.post("/service", upload.single("image"), async (req, res) => {
  const {
    name,
    type,
    location,
    description,
    price,
    link,
    phoneNumber,
    reserved_dates,
    color,
    size,
    subservice,
    //menus,
    max_guest_number,
    store,
  } = req.body;
  const image = req.file;

  try {
    // Create a new Service instance with the provided data
    const service = new Service({
      name,
      type,
      location,
      description,
      price,
      link,
      phoneNumber,
      reserved_dates,
      color,
      size,
      subservice,
      menus: menus.map((menu) => ({
        name: menu.name,
        price: menu.price,
        items: menu.items.map((item) => ({
          item_name: item.item_name,
        })),
      })),
      max_guest_number,
      store,
      img: {
        data: fs.readFileSync(image.path),
        contentType: image.mimetype,
      },
    });

    // Save the service to the database
    const savedService = await service.save();

    // Return the saved service as the response
    res.status(200).json(savedService);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});*/

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
app.put("/service/get_service_filtered", ServiceController.get_service_filtered);
app.put("/service/get_all_subcategories", ServiceController.get_all_subcategories);
app.put("/service/add_reserve_date", ServiceController.add_reserve_date);//end service

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
app.put("/chat/get_chat_by_id", ChatController.get_chat_by_id);
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
//service
app.delete("/service/:id", ServiceController.delete_service_by_id);
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
//app.post("/user/picture", UserController.post_picture_for_user);
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

//app.post('/user/login', UserController.loginUser)

app.post("/user/register", UserController.registerUser);

//app.get('/user/current', validateToken, UserController.currentUser);
app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("user creds");
    console.log(req.body);

    const user = await User.findOne({ email: email });

    if (!user) res.status(400).json({ error: "User Doesn't Exist" });

    const dbPassword = user.password;
    const match = await bcrypt.compare(password, dbPassword);

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
      req.user = user;
      res.json(email);
    }
  } catch (error) {
    // Handle any errors that occur during the login process
    console.error(error);
    res.status(500).json({ error: "An error occurred during login" });
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

// http.createServer((req, res) => {
//   const request = new URL(req.url, `http://${req.headers.host}`);
//   const action = request.pathname;

//   const filePath = path.join(__dirname, action);

//   fs.exists(filePath, function (exists) {
//     if (!exists) {
//       res.writeHead(404, {
//         'Content-Type': 'text/plain'
//       });
//       res.end('404 Not Found');
//       return;
//     }

//     const ext = path.extname(action);

//     let contentType = 'text/plain';

//     if (ext === '.png') {
//       contentType = 'image/png';
//     }

//     res.writeHead(200, {
//       'Content-Type': contentType
//     });

//     fs.readFile(filePath, function (err, content) {
//       if (err) {
//         res.writeHead(500);
//         res.end('Server Error');
//       } else {
//         res.end(content);
//       }
//     });
//   });
// }).listen(3000, '127.0.0.1', () => {
//   console.log(__dirname);
// });
