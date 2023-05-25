const JewelleryStore = require("../models/jewleryStore");
exports.post_jewellery = async (req, res) => {
  try {
    const jewellery = await JewelleryStore.create(req.body);
    res.status(200).json(jewellery);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_jewellerys = async (req, res) => {
  try {
    const jewellery = await JewelleryStore.find({});
    res.status(200).json(jewellery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_jewellery = async (req, res) => {
  try {
    const { id } = req.params;
    const jewellery = await JewelleryStore.findByIdAndUpdate(id, req.body);
    if (!jewellery) {
      return res
        .status(404)
        .json({ message: `Jewellery with id ${id} not found` });
    }
    const updatedJewellery = await JewelleryStore.findById(id);
    res.status(200).json(updatedJewellery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_jewellery = async (req, res) => {
  try {
    const { id } = req.params;
    const jewellery = await JewelleryStore.findByIdAndUpdate(id);
    if (!jewellery) {
      return res
        .status(404)
        .json({ message: `Jewellery with id ${id} not found` });
    }
    res.status(200).json(jewellery);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_jewellery_store_by_name = async (req, res) => {
  try {
    const { name } = req.params;
    const jewellery = await JewelleryStore.findAll({ name: name });
    if (!jewellery) {
      return res
        .status(404)
        .json({ message: `Jewellery store called ${name} not found` });
    }
    res.status(200).json(jewellery);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
