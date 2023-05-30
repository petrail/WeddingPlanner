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
    const other = await Other.findByIdAndDelete(id);
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
    const other = await Other.find({ name: req.params.name });
    res.send(other);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_other_by_service = async (req, res) => {
  const typeOfService = req.params.typeOfService;
  try {
    const other = await Other.find({
      "service.typeOfService": typeOfService,
    });
    res.json(other);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.get_other_by_location = async (req, res) => {
  try {
    const { location } = req.params;

    const other = await Other.find({ location });

    res.send(other);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};
