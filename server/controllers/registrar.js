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
    const registrar = await Registrar.findByIdAndDelete(id);
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
    const registrar = await Registrar.find({ name: req.params.name });
    res.send(registrar);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_registrar_when_reserved = async (req, res) => {
  try {
    const registrar = await Registrar.find({
      dateReserved: req.params.dateReserved,
    });
    res.send(registrar);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};

/*price*/
exports.get_registrar_by_price = async (req, res) => {
  try {
    const registrar = await Registrar.find({
      price: req.params.price,
    });
    res.send(registrar);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};

exports.get_registrar_by_township = async (req, res) => {
  try {
    const registrar = await Registrar.find({
      township: req.params.township,
    });
    res.send(registrar);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};
