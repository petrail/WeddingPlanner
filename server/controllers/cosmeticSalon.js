const CosmeticSalonService = require("../models/service");
exports.post_salon = async (req, res) => {
  try {
    const cosmeticSalon = await CosmeticSalonService.create(req.body);
    res.status(200).json(cosmeticSalon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_salons = async (req, res) => {
  try {
    const salon = await CosmeticSalonService.find({
      type: "Kozmeticki salon",
    });
    res.status(200).json(salon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_salon = async (req, res) => {
  try {
    const { id } = req.params;
    const salon = await CosmeticSalonService.findByIdAndUpdate(id, req.body);
    if (!salon) {
      return res
        .status(404)
        .json({ message: `Cosmetic salon with id ${id} not found` });
    }
    const updatedSalon = await CosmeticSalonService.findById(id);
    res.status(200).json(updatedSalon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_cosmetic_salon = async (req, res) => {
  try {
    const { id } = req.params;
    const salon = await CosmeticSalonService.findByIdAndDelete(id);
    if (!salon) {
      return res.status(404).json({ message: `Salon with id ${id} not found` });
    }
    res.status(200).json(salon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

