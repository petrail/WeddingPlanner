const RegistrarService = require("../models/service");
exports.post_registrar = async (req, res) => {
  try {
    const registrar = await RegistrarService.create(req.body);
    res.status(200).json(registrar);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_registrars = async (req, res) => {
  try {
    const registrar = await RegistrarService.find({type : 'Maticari'});
    res.status(200).json(registrar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_registrar = async (req, res) => {
  try {
    const { id } = req.params;
    const registrar = await RegistrarService.findByIdAndUpdate(id, req.body);
    if (!registrar) {
      return res
        .status(404)
        .json({ message: `Registrar with id ${id} not found` });
    }
    const updatedRegistrar = await RegistrarService.findById(id);
    res.status(200).json(updatedRegistrar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_registrar = async (req, res) => {
  try {
    const { id } = req.params;
    const registrar = await RegistrarService.findByIdAndUpdate(id);
    if (!registrar) {
      return res
        .status(404)
        .json({ message: `Registrar with id ${id} not found` });
    }
    res.status(200).json(registrar);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_registrar_by_name = async (req, res) => {
  try {
    const registrar = await RegistrarService.find({ name: req.params.name });
    res.send(registrar);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving registrars");
  }
};

