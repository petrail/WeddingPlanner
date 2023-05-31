const PhotoStudioService = require("../models/service");
exports.post_photo_studio = async (req, res) => {
  try {
    const photoStudio = await PhotoStudioService.create(req.body);
    res.status(200).json(photoStudio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_photoStudios = async (req, res) => {
  try {
    const photoStudio = await PhotoStudioService.find({type : 'Fotografisanje'});
    res.status(200).json(photoStudio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_photo_studio = async (req, res) => {
  try {
    const { id } = req.params;
    const photoStudio = await PhotoStudioService.findByIdAndUpdate(id, req.body);
    if (!photoStudio) {
      return res
        .status(404)
        .json({ message: `Photo studio with id ${id} not found` });
    }
    const updatedPhoto = await PhotoStudioService.findById(id);
    res.status(200).json(updatedPhoto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_photo_studio = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await PhotoStudioService.findByIdAndDelete(id);
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
