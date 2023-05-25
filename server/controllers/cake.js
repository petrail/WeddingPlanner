const Cake = require("../models/cake");
exports.get_all_cakes = async (req, res) => {
  try {
    const cake = await Cake.find({});
    res.status(200).json(cake);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.post_cake = async (req, res) => {
  try {
    const cake = await Cake.create(req.body);
    res.status(200).json(cake);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.put_cake = async (req, res) => {
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
};

exports.delete_cake = async (req, res) => {
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
};

/**/
exports.get_wafery_by_name = async (req, res) => {
  try {
    const { nameOfTheWafery } = req.params;
    const cake = await Cake.findOne({ nameOfTheWafery: nameOfTheWafery });
    if (!cake) {
      return res
        .status(404)
        .json({ message: `Wafery called ${nameOfTheWafery} not found` });
    }
    res.status(200).json(cake);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
