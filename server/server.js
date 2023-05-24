const express = require("express");
const mongoose = require("mongoose");
const Admin = require("./models/admin");
const Bride = require("./models/bride");
const Cake = require("./models/cake");
const Coordinator = require("./models/coordinator");
const CosmeticSalon = require("./models/cosmeticSalon");
const DanceLessons = require("./models/danceLessons");
const Decoration = require("./models/decoration");
const Groom = require("./models/groom");
const JewelleryStore = require("./models/jewleryStore");
const Music = require("./models/music");
const PhotoStudio = require("./models/photoStudio");
const Registrar = require("./models/registrar");
const Restaurant = require("./models/restaurant");
const User = require("./models/user");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/img"));

//----------------------------------------------------------------------------------------------------------------------------
//post methods
//admin
app.post("/admin", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(200).json(admin);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//bride
app.post("/bride", async (req, res) => {
  try {
    const bride = await Bride.create(req.body);
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//cake
app.post("/cake", async (req, res) => {
  try {
    const cake = await Cake.create(req.body);
    res.status(200).json(cake);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//coordinator
app.post("/coordinator", async (req, res) => {
  try {
    const coordinator = await Coordinator.create(req.body);
    res.status(200).json(coordinator);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//cosmeticSalon
app.post("/cosmeticSalon", async (req, res) => {
  try {
    const cosmeticSalon = await CosmeticSalon.create(req.body);
    res.status(200).json(cosmeticSalon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//danceLessons
app.post("/danceLessons", async (req, res) => {
  try {
    const danceLessons = await DanceLessons.create(req.body);
    res.status(200).json(danceLessons);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//decoration
app.post("/decoration", async (req, res) => {
  try {
    const decoration = await Decoration.create(req.body);
    res.status(200).json(decoration);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//groom
app.post("/groom", async (req, res) => {
  try {
    const groom = await Groom.create(req.body);
    res.status(200).json(groom);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//jewellery
app.post("/jewleryStore", async (req, res) => {
  try {
    const jewellery = await JewelleryStore.create(req.body);
    res.status(200).json(jewellery);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//music
app.post("/music", async (req, res) => {
  try {
    const music = await Music.create(req.body);
    res.status(200).json(music);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//photoStudio
app.post("/photoStudio", async (req, res) => {
  try {
    const photo = await PhotoStudio.create(req.body);
    res.status(200).json(photo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//registrar
app.post("/registrar", async (req, res) => {
  try {
    const registrar = await Registrar.create(req.body);
    res.status(200).json(registrar);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//restaurant
app.post("/restaurant", async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//user
app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//end post methods

//----------------------------------------------------------------------------------------------------------------------------

//all get methods

//admin
app.get("/admin", async (req, res) => {
  try {
    const admin = await Admin.find({});
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//bride
app.get("/bride", async (req, res) => {
  try {
    const bride = await Bride.find({});
    res.status(200).json(bride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//cake
app.get("/cake", async (req, res) => {
  try {
    const cake = await Cake.find({});
    res.status(200).json(cake);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//coordinator
app.get("/coordinator", async (req, res) => {
  try {
    const coordinator = await Coordinator.find({});
    res.status(200).json(coordinator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//cosmeticSalon
app.get("/cosmeticSalon", async (req, res) => {
  try {
    const salon = await CosmeticSalon.find({});
    res.status(200).json(salon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//dance lessons
app.get("/danceLessons", async (req, res) => {
  try {
    const dance = await DanceLessons.find({});
    res.status(200).json(dance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//decoration
app.get("/decoration", async (req, res) => {
  try {
    const decoration = await Decoration.find({});
    res.status(200).json(decoration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//groom
app.get("/groom", async (req, res) => {
  try {
    const groom = await Groom.find({});
    res.status(200).json(groom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//jewellery
app.get("/jewleryStore", async (req, res) => {
  try {
    const jewellery = await JewelleryStore.find({});
    res.status(200).json(jewellery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//music
app.get("/music", async (req, res) => {
  try {
    const music = await Music.find({});
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//photoStudio
app.get("/photoStudio", async (req, res) => {
  try {
    const photo = await PhotoStudio.find({});
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//registrar
app.get("/registrar", async (req, res) => {
  try {
    const registrar = await Registrar.find({});
    res.status(200).json(registrar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//restaurant
app.get("/restaurant", async (req, res) => {
  try {
    const restaurant = await Restaurant.find({});
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//user
app.get("/user", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// end get all methods

//----------------------------------------------------------------------------------------------------------------------------

// update/put methods - ID
//admin
app.put("/admin/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndUpdate(id, req.body);
    if (!admin) {
      return res.status(404).json({ message: `Admin with id ${id} not found` });
    }
    const updatedAdmin = await Admin.findById(id);
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//bride
app.put("/bride/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bride = await Bride.findByIdAndUpdate(id, req.body);
    if (!bride) {
      return res.status(404).json({ message: `Bride with id ${id} not found` });
    }
    const updatedBride = await Bride.findById(id);
    res.status(200).json(updatedBride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//cake
app.put("/cake/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cake = await Cake.findByIdAndUpdate(id, req.body);
    if (!cake) {
      return res.status(404).json({ message: `Cake with id ${id} not found` });
    }
    const updatedCake = await Cake.findById(id);
    res.status(200).json(updatedCake);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//coordinator
app.put("/coordinator/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coordinator = await Coordinator.findByIdAndUpdate(id, req.body);
    if (!coordinator) {
      return res
        .status(404)
        .json({ message: `Coordinator with id ${id} not found` });
    }
    const updatedCoordinator = await Coordinator.findById(id);
    res.status(200).json(updatedCoordinator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//cosmeticSalon
app.put("/cosmeticSalon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const salon = await CosmeticSalon.findByIdAndUpdate(id, req.body);
    if (!salon) {
      return res
        .status(404)
        .json({ message: `Cosmetic salon with id ${id} not found` });
    }
    const updatedSalon = await CosmeticSalon.findById(id);
    res.status(200).json(updatedSalon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//dance lessons
app.put("/danceLessons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dance = await DanceLessons.findByIdAndUpdate(id, req.body);
    if (!dance) {
      return res
        .status(404)
        .json({ message: `Dance lessons with id ${id} not found` });
    }
    const updatedDance = await DanceLessons.findById(id);
    res.status(200).json(updatedDance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//decoration
app.put("/decoration/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const decoration = await Decoration.findByIdAndUpdate(id, req.body);
    if (!decoration) {
      return res
        .status(404)
        .json({ message: `Decoration with id ${id} not found` });
    }
    const updatedDecoration = await Decoration.findById(id);
    res.status(200).json(updatedDecoration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//groom
app.put("/groom/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const groom = await Groom.findByIdAndUpdate(id, req.body);
    if (!groom) {
      return res.status(404).json({ message: `Groom with id ${id} not found` });
    }
    const updatedGroom = await Groom.findById(id);
    res.status(200).json(updatedGroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//jewellery
app.put("/jewleryStore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const jewellery = await JewelleryStore.findByIdAndUpdate(id, req.body);
    if (!jewellery) {
      return res
        .status(404)
        .json({ message: `Jewellery with id ${id} not found` });
    }
    const updatedJewellery = await JewelleryStore.findById(id);
    res.status(200).json(updatedJewellery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//music
app.put("/music/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const music = await Music.findByIdAndUpdate(id, req.body);
    if (!music) {
      return res
        .status(404)
        .json({ message: `Music band with id ${id} not found` });
    }
    const updatedMusic = await Music.findById(id);
    res.status(200).json(updatedMusic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//photoStudio
app.put("/photoStudio/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const photoStudio = await PhotoStudio.findByIdAndUpdate(id, req.body);
    if (!photoStudio) {
      return res
        .status(404)
        .json({ message: `Photo studio with id ${id} not found` });
    }
    const updatedPhoto = await PhotoStudio.findById(id);
    res.status(200).json(updatedPhoto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//registrar
app.put("/registrar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registrar = await Registrar.findByIdAndUpdate(id, req.body);
    if (!registrar) {
      return res
        .status(404)
        .json({ message: `Registrar with id ${id} not found` });
    }
    const updatedRegistrar = await Registrar.findById(id);
    res.status(200).json(updatedRegistrar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//restaurant
app.put("/restaurant/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndUpdate(id, req.body);
    if (!restaurant) {
      return res
        .status(404)
        .json({ message: `Restaurant with id ${id} not found` });
    }
    const updatedRestaurant = await Restaurant.findById(id);
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//user
app.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// end update/put methods

//----------------------------------------------------------------------------------------------------------------------------

//delete methods
//admin
app.delete("/admin/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndUpdate(id);
    if (!admin) {
      return res.status(404).json({ message: `Admin with id ${id} not found` });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//bride
app.delete("/bride/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bride = await Bride.findByIdAndUpdate(id);
    if (!bride) {
      return res.status(404).json({ message: `Bride with id ${id} not found` });
    }
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//cake
app.delete("/cake/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cake = await Cake.findByIdAndUpdate(id);
    if (!cake) {
      return res.status(404).json({ message: `Cake with id ${id} not found` });
    }
    res.status(200).json(cake);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//coordinator
app.delete("/coordinator/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coordinator = await Coordinator.findByIdAndUpdate(id);
    if (!coordinator) {
      return res
        .status(404)
        .json({ message: `Coordinator with id ${id} not found` });
    }
    res.status(200).json(coordinator);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//cosmeticSalon
app.delete("/cosmeticSalon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const salon = await CosmeticSalon.findByIdAndUpdate(id);
    if (!salon) {
      return res.status(404).json({ message: `Salon with id ${id} not found` });
    }
    res.status(200).json(salon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//danceLessons
app.delete("/danceLessons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dance = await DanceLessons.findByIdAndUpdate(id);
    if (!dance) {
      return res
        .status(404)
        .json({ message: `Dance lesson with id ${id} not found` });
    }
    res.status(200).json(dance);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//decoration
app.delete("/decoration/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const decoration = await Decoration.findByIdAndUpdate(id);
    if (!decoration) {
      return res
        .status(404)
        .json({ message: `Decoration with id ${id} not found` });
    }
    res.status(200).json(decoration);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//groom
app.delete("/groom/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const groom = await Groom.findByIdAndUpdate(id);
    if (!groom) {
      return res.status(404).json({ message: `Groom with id ${id} not found` });
    }
    res.status(200).json(groom);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//jewellery
app.delete("/jewleryStore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const jewellery = await JewelleryStore.findByIdAndUpdate(id);
    if (!jewellery) {
      return res
        .status(404)
        .json({ message: `Jewellery with id ${id} not found` });
    }
    res.status(200).json(jewellery);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//music
app.delete("/music/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const music = await Music.findByIdAndUpdate(id);
    if (!music) {
      return res.status(404).json({ message: `Music with id ${id} not found` });
    }
    res.status(200).json(music);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//photoStudio
app.delete("/photoStudio/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await PhotoStudio.findByIdAndUpdate(id);
    if (!photo) {
      return res
        .status(404)
        .json({ message: `Photo studio with id ${id} not found` });
    }
    res.status(200).json(photo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//registrar
app.delete("/registrar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registrar = await Registrar.findByIdAndUpdate(id);
    if (!registrar) {
      return res
        .status(404)
        .json({ message: `Registrar with id ${id} not found` });
    }
    res.status(200).json(registrar);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//restaurant
app.delete("/restaurant/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndUpdate(id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ message: `Restaurant with id ${id} not found` });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//user
app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id);
    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
//end delete methods

//----------------------------------------------------------------------------------------------------------------------------

//additional methods
app.get("/restaurant/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const restaurant = await Restaurant.findOne({ name: name });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/user/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const user = await User.findOne({ name: name });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.delete("/user/:username", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
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
