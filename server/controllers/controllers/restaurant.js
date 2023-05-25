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
};

/**/
exports.get_restaurant_by_name = async (req, res) => {
  try {
    const { name } = req.params;
    const restaurant = await Restaurant.findOne({ name: name });
    if (!restaurant) {
      return res
        .status(404)
        .json({ message: `Restaurant called ${name} not found` });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_restaurant_by_location = async (req, res) => {
  try {
    const { location } = req.params;
    const restaurant = await Restaurant.findAll({ location: location });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurants not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
