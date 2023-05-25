const Coordinator = require("../models/coordinator");
exports.post_coordinator = async (req, res) => {
  try {
    const coordinator = await Coordinator.create(req.body);
    res.status(200).json(coordinator);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_coordinators = async (req, res) => {
  try {
    const coordinator = await Coordinator.find({});
    res.status(200).json(coordinator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_coordinator = async (req, res) => {
  try {
    const { id } = req.params;
    const coordinator = await Coordinator.findByIdAndUpdate(id, req.body);
    if (!coordinator) {
      return res
        .status(404)
        .json({ message: `Coordinator with id ${id} not found` });
    }
    const updatedCoordinator = await Coordinator.findById(id);
    res.status(200).json(updatedCoordinator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_coordinator = async (req, res) => {
  try {
    const { id } = req.params;
    const coordinator = await Coordinator.findByIdAndUpdate(id);
    if (!coordinator) {
      return res
        .status(404)
        .json({ message: `Coordinator with id ${id} not found` });
    }
    res.status(200).json(coordinator);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_coordinator_by_username = async (req, res) => {
  try {
    const { username } = req.params;
    const coordinator = await Coordinator.findOne({ username: username });
    if (!coordinator) {
      return res
        .status(404)
        .json({ message: `Coordinator with username ${username} not found` });
    }
    res.status(200).json(coordinator);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
