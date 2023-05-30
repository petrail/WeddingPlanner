const Restaurant = require("../models/restaurant");
exports.post_restaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_restaurants = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({});
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_restaurant = async (req, res) => {
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
};

exports.delete_restaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByIdAndDelete(id);
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
};

/**/
exports.get_restaurant_by_name = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({ name: req.params.name });
    res.send(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_restaurant_by_location = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({ location: req.params.location });
    res.send(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_restaurant_when_reserved = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({
      dateReserved: req.params.dateReserved,
    });
    res.send(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};

exports.get_restaurant_by_guests_number = async (req, res) => {
  try {
    const restaurant = await Restaurant.find({
      maxNumberGuests: req.params.maxNumberGuests,
    });
    res.send(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};

exports.get_restaurant_by_menu_price = async (req, res) => {
  const priceMenu = req.params.priceMenu;
  try {
    const restaurants = await Restaurant.find({
      "service.priceMenu": priceMenu,
    });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
