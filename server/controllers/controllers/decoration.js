const Decoration = require("../models/decoration");
exports.post_decoration = async (req, res) => {
  try {
    const decoration = await Decoration.create(req.body);
    res.status(200).json(decoration);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_decorations = async (req, res) => {
  try {
    const decoration = await Decoration.find({});
    res.status(200).json(decoration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_decoration = async (req, res) => {
  try {
    const { id } = req.params;
    const decoration = await Decoration.findByIdAndUpdate(id, req.body);
    if (!decoration) {
      return res
        .status(404)
        .json({ message: `Decoration with id ${id} not found` });
    }
    const updatedDecoration = await Decoration.findById(id);
    res.status(200).json(updatedDecoration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_decoration = async (req, res) => {
  try {
    const { id } = req.params;
    const decoration = await Decoration.findByIdAndUpdate(id);
    if (!decoration) {
      return res
        .status(404)
        .json({ message: `Decoration with id ${id} not found` });
    }
    res.status(200).json(decoration);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_store_by_name = async (req, res) => {
  try {
    const { nameOfTheStore } = req.params;
    const decoration = await Decoration.findOne({
      nameOfTheStore: nameOfTheStore,
    });
    if (!decoration) {
      return res
        .status(404)
        .json({ message: `Store named ${nameOfTheStore} not found` });
    }
    res.status(200).json(decoration);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
