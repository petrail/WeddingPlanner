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
    const groom = await Groom.findByIdAndUpdate(id);
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
    const { name } = req.params;
    const groom = await Groom.findOne({ name: name });
    if (!groom) {
      return res
        .status(404)
        .json({ message: `Boutique called ${name} not found` });
    }
    res.status(200).json(groom);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
