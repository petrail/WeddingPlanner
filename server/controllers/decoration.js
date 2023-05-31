const DecorationService = require("../models/service");
exports.post_decoration = async (req, res) => {
  try {
    const decoration = await DecorationService.create(req.body);
    res.status(200).json(decoration);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_decorations = async (req, res) => {
  try {
    const decoration = await DecorationService.find({type : 'Dekoracija'});
    res.status(200).json(decoration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_decoration = async (req, res) => {
  try {
    const { id } = req.params;
    const decoration = await DecorationService.findByIdAndUpdate(id, req.body);
    if (!decoration) {
      return res
        .status(404)
        .json({ message: `Decoration with id ${id} not found` });
    }
    const updatedDecoration = await DecorationService.findById(id);
    res.status(200).json(updatedDecoration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_decoration = async (req, res) => {
  try {
    const { id } = req.params;
    const decoration = await DecorationService.findByIdAndDelete(id);
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
    const decoration = await DecorationService.find({
      store: req.params.store,
    });
    res.send(decoration);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};
