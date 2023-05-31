const BrideService = require("../models/service");
exports.post_bride = async (req, res) => {
  try {
    const bride = await BrideService.create(req.body);
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_brides = async (req, res) => {
  try {
    const bride = await BrideService.find({type : 'Za mladu'});
    res.status(200).json(bride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_bride = async (req, res) => {
  try {
    const { id } = req.params;
    const bride = await BrideService.findByIdAndUpdate(id, req.body);
    if (!bride) {
      return res
        .status(404)
        .json({ message: `Bride with id ${id} not found` });
    }
    const updatedBride = await BrideService.findById(id);
    res.status(200).json(updatedBride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_bride = async (req, res) => {
  try {
    const { id } = req.params;
    const bride = await BrideService.findByIdAndDelete(id);
    if (!bride) {
      return res
        .status(404)
        .json({ message: `Bride with id ${id} not found` });
    }
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
