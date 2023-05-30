const Bride = require("../models/bride");

exports.post_bride = async (req, res) => {
  try {
    const bride = await Bride.create(req.body);
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_brides = async (req, res) => {
  try {
    const bride = await Bride.find({});
    res.status(200).json(bride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_bride = async (req, res) => {
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
};

exports.delete_bride_by_id = async (req, res,next) => {
  try {
    const { id } = req.params;
    const brides = await Bride.findByIdAndDelete(id);
    if (!brides) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
    res.status(200).json(brides);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_bride_by_boutique_name = async (req, res) => {
  try {
    const brides = await Bride.find({name: req.params.name});
    res.send(brides);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
};

/*location*/
exports.get_bride_boutiqe_by_location = async (req, res) => {
  try {
    const brides = await Bride.find({location: req.params.location});
    res.send(brides);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
};

/*price*/
exports.get_bride_boutiqe_by_price = async (req, res) => {
  const price = req.params.price; //getting the price from the url parameter
  try {
    const brides = await Bride.find({ "service.price": price }); //finding all brides with a service price equal to the parameter
    res.json(brides); //sending the result as a JSON object
  } catch (err) {
    res.status(500).json({ message: err.message }); //sending an error message if something went wrong
  }
};