const PhotoStudio = require("../models/photoStudio");
exports.post_photo_studio = async (req, res) => {
  try {
    const photoStudio = await PhotoStudio.create(req.body);
    res.status(200).json(photoStudio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_photoStudios = async (req, res) => {
  try {
    const photoStudio = await PhotoStudio.find({});
    res.status(200).json(photoStudio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_photo_studio = async (req, res) => {
  try {
    const { id } = req.params;
    const photoStudio = await PhotoStudio.findByIdAndUpdate(id, req.body);
    if (!photoStudio) {
      return res
        .status(404)
        .json({ message: `Photo studio with id ${id} not found` });
    }
    const updatedPhoto = await PhotoStudio.findById(id);
    res.status(200).json(updatedPhoto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_photo_studio = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await PhotoStudio.findByIdAndUpdate(id);
    if (!photo) {
      return res
        .status(404)
        .json({ message: `Photo studio with id ${id} not found` });
    }
    res.status(200).json(photo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_studio_by_name = async (req, res) => {
  try {
    const photoStudio = await PhotoStudio.find({ name: req.params.name });
    res.send(photoStudio);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_studio_when_reserved = async (req, res) => {
  try {
    const photoStudio = await PhotoStudio.find({
      dateReserved: req.params.dateReserved,
    });
    res.send(photoStudio);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};
