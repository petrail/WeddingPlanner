const CosmeticSalon = require("../models/cosmeticSalon");
exports.post_salon = async (req, res) => {
  try {
    const cosmeticSalon = await CosmeticSalon.create(req.body);
    res.status(200).json(cosmeticSalon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_salons = async (req, res) => {
  try {
    const salon = await CosmeticSalon.find({});
    res.status(200).json(salon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_salon = async (req, res) => {
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
};

exports.delete_cosmetic_salon = async (req, res) => {
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
};

/* */
exports.get_salon_by_name = async (req, res) => {
  try {
    const { name } = req.params;
    const salon = await CosmeticSalon.findOne({ name: name });
    if (!salon) {
      return res
        .status(404)
        .json({ message: `Salon called ${name} not found` });
    }
    res.status(200).json(salon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_salon_when_reserved = async (req, res) => {
  try {
    const { dateReserved } = req.params;
    const salon = await CosmeticSalon.findOne({ dateReserved: dateReserved });
    if (!salon) {
      return res.status(404).json({ message: "Salon not found" });
    }
    res.status(200).json(salon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
