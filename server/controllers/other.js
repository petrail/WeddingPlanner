const Other = require("../models/other");
exports.post_other = async (req, res) => {
  try {
    const other = await Other.create(req.body);
    res.status(200).json(other);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_other = async (req, res) => {
  try {
    const other = await Other.find({});
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_other = async (req, res) => {
  try {
    const { id } = req.params;
    const other = await Other.findByIdAndUpdate(id, req.body);
    if (!other) {
      return res.status(404).json({ message: `Other with id ${id} not found` });
    }
    const updatedOther = await Other.findById(id);
    res.status(200).json(updatedOther);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_other = async (req, res) => {
  try {
    const { id } = req.params;
    const other = await Other.findByIdAndUpdate(id);
    if (!other) {
      return res.status(404).json({ message: `Other with id ${id} not found` });
    }
    res.status(200).json(other);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_store_by_name = async (req, res) => {
  try {
    const { nameOfTheStore } = req.params;
    const other = await Other.findOne({
      nameOfTheStore: nameOfTheStore,
    });
    if (!other) {
      return res
        .status(404)
        .json({ message: `Store named ${nameOfTheStore} not found` });
    }
    res.status(200).json(other);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
