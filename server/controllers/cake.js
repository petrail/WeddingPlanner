const CakeService = require("../models/service");

exports.get_all_cakes = async (req, res) => {
  try {
    const cake = await CakeService.find({ type: "Torte" });
    res.status(200).json(cake);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.post_cake = async (req, res) => {
  try {
    const cake = await CakeService.create(req.body);
    res.status(200).json(cake);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.put_cake = async (req, res) => {
  try {
    const { id } = req.params;
    const cake = await CakeService.findByIdAndUpdate(id, req.body);
    if (!cake) {
      return res.status(404).json({ message: `Cake with id ${id} not found` });
    }
    const updatedCake = await CakeService.findById(id);
    res.status(200).json(updatedCake);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_cake = async (req, res) => {
  try {
    const { id } = req.params;
    const cake = await CakeService.findByIdAndDelete(id);
    if (!cake) {
      return res.status(404).json({ message: `Cake with id ${id} not found` });
    }
    res.status(200).json(cake);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
