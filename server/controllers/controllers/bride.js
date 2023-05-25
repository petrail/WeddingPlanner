const Bride = require("../models/bride");
exports.post_bride = async (req, res) => {
  try {
    const bride = await Bride.create(req.body);
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_brides = async (req, res) => {
  try {
    const bride = await Bride.find({});
    res.status(200).json(bride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_bride = async (req, res) => {
  try {
    const { id } = req.params;
    const bride = await Bride.findByIdAndUpdate(id, req.body);
    if (!bride) {
      return res.status(404).json({ message: `Bride with id ${id} not found` });
    }
    const updatedBride = await Bride.findById(id);
    res.status(200).json(updatedBride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_bride = async (req, res) => {
  try {
    const { id } = req.params;
    const bride = await Bride.findByIdAndUpdate(id);
    if (!bride) {
      return res.status(404).json({ message: `Bride with id ${id} not found` });
    }
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_bride_by_boutique_name = async (req, res) => {
  try {
    const { name } = req.params;
    const bride = await Bride.findOne({ name: name });
    if (!bride) {
      return res
        .status(404)
        .json({ message: `Boutique called ${name} not found` });
    }
    res.status(200).json(bride);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
