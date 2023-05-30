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
    const jewellery = await JewelleryStore.findByIdAndDelete(id);
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
    const jewellery = await JewelleryStore.find({ name: req.params.name });
    res.send(jewellery);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

/*location*/
exports.get_jewellery_shop_by_location = async (req, res) => {
  try {
    const jewellery = await JewelleryStore.find({
      location: req.params.location,
    });
    res.send(jewellery);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_jewellery_by_service = async (req, res) => {
  const typeOfJewlery = req.params.typeOfJewlery;
  try {
    const jewellery = await JewelleryStore.find({
      "service.typeOfJewlery": typeOfJewlery,
    });
    res.json(jewellery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
