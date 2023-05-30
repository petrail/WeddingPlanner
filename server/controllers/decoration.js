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
    const decoration = await Decoration.findByIdAndDelete(id);
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
    const decoration = await Decoration.find({
      nameOfTheStore: req.params.nameOfTheStore,
    });
    res.send(decoration);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_decoration_by_price = async (req, res) => {
  const price = req.params.price;
  try {
    const decorations = await Decoration.find({ "service.price": price });
    res.json(decorations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.get_decoration_by_service = async (req, res) => {
  const typeOfService = req.params.typeOfService;
  try {
    const decorations = await Decoration.find({
      "service.typeOfService": typeOfService,
    });
    res.json(decorations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
