const RestaurantService = require("../models/service");
exports.post_restaurant = async (req, res) => {
  try {
    const restaurant = await RestaurantService.create(req.body);
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_restaurants = async (req, res) => {
  try {
    const restaurant = await RestaurantService.find({type : 'Restorani'});
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_restaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await RestaurantService.findByIdAndUpdate(id, req.body);
    if (!restaurant) {
      return res
        .status(404)
        .json({ message: `Restaurant with id ${id} not found` });
    }
    const updatedRestaurant = await RestaurantService.findById(id);
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_restaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await RestaurantService.findByIdAndDelete(id);
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
    const restaurant = await RestaurantService.find({ name: req.params.name });
    res.send(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving restaurants");
  }
};


exports.get_restaurant_when_reserved = async (req, res) => {
  try {
    const restaurant = await RestaurantService.find({
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
    const restaurant = await RestaurantService.find({
      maxNumberGuests: req.params.maxNumberGuests,
    });
    res.send(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};
