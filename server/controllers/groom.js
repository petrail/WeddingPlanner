const Groom = require("../models/groom");
exports.post_groom = async (req, res) => {
  try {
    const groom = await Groom.create(req.body);
    res.status(200).json(groom);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_grooms = async (req, res) => {
  try {
    const groom = await Groom.find({});
    res.status(200).json(groom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_groom = async (req, res) => {
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
};

exports.delete_groom = async (req, res) => {
  try {
    const { id } = req.params;
    const groom = await Groom.findByIdAndDelete(id);
    if (!groom) {
      return res.status(404).json({ message: `Groom with id ${id} not found` });
    }
    res.status(200).json(groom);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* */
exports.get_groom_by_boutique_name = async (req, res) => {
  try {
    const groom = await Groom.find({ name: req.params.name });
    res.send(groom);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

/*location*/
exports.get_groom_boutiqe_by_location = async (req, res) => {
  try {
    const groom = await Groom.find({ location: req.params.location });
    res.send(groom);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_groom_boutiqe_by_price = async (req, res) => {
  const price = req.params.price; //getting the price from the url parameter
  try {
    const groom = await Groom.find({ "service.price": price }); //finding all brides with a service price equal to the parameter
    res.json(groom); //sending the result as a JSON object
  } catch (err) {
    res.status(500).json({ message: err.message }); //sending an error message if something went wrong
  }
};
