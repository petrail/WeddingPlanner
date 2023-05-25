const PhotoStudio = require("../models/photoStudio");
exports.post_photo_studio = async (req, res) => {
  try {
    const photo = await PhotoStudio.find({});
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_photoStudios = async (req, res) => {
  try {
    const other = await Other.find({});
    res.status(200).json(other);
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
    const { name } = req.params;
    const photo = await PhotoStudio.findOne({ name: name });
    if (!photo) {
      return res
        .status(404)
        .json({ message: `Photo studio called ${name} not found` });
    }
    res.status(200).json(photo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_studio_when_reserved = async (req, res) => {
  try {
    const { dateReserved } = req.params;
    const photo = await PhotoStudio.findOne({ dateReserved: dateReserved });
    if (!photo) {
      return res.status(404).json({ message: "Photo studio not found" });
    }
    res.status(200).json(photo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
