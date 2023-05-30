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

exports.get_all_other = async (req, res) => {
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

/**/
exports.get_store_by_name = async (req, res) => {
  try {
    const other = await OtherService.find({ name: req.params.name });
    res.send(other);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving other");
  }
};

exports.get_other_by_service = async (req, res) => {
  const typeOfService = req.params.typeOfService;
  try {
    const other = await OtherService.find({
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

    const other = await OtherService.find({ location });

    res.send(other);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving other");
  }
};
