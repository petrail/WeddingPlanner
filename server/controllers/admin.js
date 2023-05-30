const Admin = require("../models/admin");
exports.get_all_admins = async (req, res) => {
  try {
    const admin = await Admin.find({});
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.post_admin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(200).json(admin);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.put_admin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndUpdate(id, req.body);
    if (!admin) {
      return res.status(404).json({ message: `Admin with id ${id} not found` });
    }
    const updatedAdmin = await Admin.findById(id);
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_admin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      return res.status(404).json({ message: `Admin with id ${id} not found` });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_admin_by_username = async (req, res) => {
  try {
    const admin = await Admin.find({ username: req.params.username });
    res.send(admin);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};
