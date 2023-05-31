const GroomService = require("../models/service");
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
    const groom = await GroomService.find({type : 'Za mladozenju'});
    res.status(200).json(groom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_groom = async (req, res) => {
  try {
    const { id } = req.params;
    const groom = await GroomService.findByIdAndUpdate(id, req.body);
    if (!groom) {
      return res.status(404).json({ message: `Groom with id ${id} not found` });
    }
    const updatedGroom = await GroomService.findById(id);
    res.status(200).json(updatedGroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_groom = async (req, res) => {
  try {
    const { id } = req.params;
    const groom = await GroomService.findByIdAndDelete(id);
    if (!groom) {
      return res.status(404).json({ message: `Groom with id ${id} not found` });
    }
    res.status(200).json(groom);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};


