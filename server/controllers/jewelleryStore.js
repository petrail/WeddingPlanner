const JewelleryStoreService = require("../models/service");
exports.post_jewellery = async (req, res) => {
  try {
    const jewellery = await JewelleryStoreService.create(req.body);
    res.status(200).json(jewellery);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_jewellerys = async (req, res) => {
  try {
    const jewellery = await JewelleryStoreService.find({type : 'Burme'});
    res.status(200).json(jewellery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_jewellery = async (req, res) => {
  try {
    const { id } = req.params;
    const jewellery = await JewelleryStoreService.findByIdAndUpdate(id, req.body);
    if (!jewellery) {
      return res
        .status(404)
        .json({ message: `Jewellery with id ${id} not found` });
    }
    const updatedJewellery = await JewelleryStoreService.findById(id);
    res.status(200).json(updatedJewellery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_jewellery = async (req, res) => {
  try {
    const { id } = req.params;
    const jewellery = await JewelleryStoreService.findByIdAndDelete(id);
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


