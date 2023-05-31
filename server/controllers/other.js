const OtherService = require("../models/service");
exports.post_other = async (req, res) => {
  try {
    const other = await OtherService.create(req.body);
    res.status(200).json(other);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_others = async (req, res) => {
  try {
    const other = await OtherService.find({type : 'Ostalo'});
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_other = async (req, res) => {
  try {
    const { id } = req.params;
    const other = await OtherService.findByIdAndUpdate(id, req.body);
    if (!other) {
      return res.status(404).json({ message: `Other with id ${id} not found` });
    }
    const updatedOther = await OtherService.findById(id);
    res.status(200).json(updatedOther);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_other = async (req, res) => {
  try {
    const { id } = req.params;
    const other = await OtherService.findByIdAndDelete(id);
    if (!other) {
      return res.status(404).json({ message: `Other with id ${id} not found` });
    }
    res.status(200).json(other);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
