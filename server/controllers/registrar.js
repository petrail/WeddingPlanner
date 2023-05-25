const Registrar = require("../models/registrar");
exports.post_registrar = async (req, res) => {
  try {
    const registrar = await Registrar.create(req.body);
    res.status(200).json(registrar);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_registrars = async (req, res) => {
  try {
    const registrar = await Registrar.find({});
    res.status(200).json(registrar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_registrar = async (req, res) => {
  try {
    const { id } = req.params;
    const registrar = await Registrar.findByIdAndUpdate(id, req.body);
    if (!registrar) {
      return res
        .status(404)
        .json({ message: `Registrar with id ${id} not found` });
    }
    const updatedRegistrar = await Registrar.findById(id);
    res.status(200).json(updatedRegistrar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_registrar = async (req, res) => {
  try {
    const { id } = req.params;
    const registrar = await Registrar.findByIdAndUpdate(id);
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

/**/
exports.get_registrar_by_name = async (req, res) => {
  try {
    const { name } = req.params;
    const registrar = await Registrar.findOne({ name: name });
    if (!registrar) {
      return res
        .status(404)
        .json({ message: `Registrar studio called ${name} not found` });
    }
    res.status(200).json(registrar);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_registrar_when_reserved = async (req, res) => {
  try {
    const { dateReserved } = req.params;
    const registrar = await Registrar.findOne({ dateReserved: dateReserved });
    if (!registrar) {
      return res.status(404).json({ message: "Registrar not found" });
    }
    res.status(200).json(registrar);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
