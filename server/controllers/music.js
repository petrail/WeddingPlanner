const Music = require("../models/music");
exports.post_music = async (req, res) => {
  try {
    const music = await Music.create(req.body);
    res.status(200).json(music);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_bands = async (req, res) => {
  try {
    const music = await Music.find({});
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_music = async (req, res) => {
  try {
    const { id } = req.params;
    const music = await Music.findByIdAndUpdate(id, req.body);
    if (!music) {
      return res
        .status(404)
        .json({ message: `Music band with id ${id} not found` });
    }
    const updatedMusic = await Music.findById(id);
    res.status(200).json(updatedMusic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_music = async (req, res) => {
  try {
    const { id } = req.params;
    const music = await Music.findByIdAndDelete(id);
    if (!music) {
      return res.status(404).json({ message: `Music with id ${id} not found` });
    }
    res.status(200).json(music);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/* */

exports.get_band_by_name = async (req, res) => {
  try {
    const music = await Music.find({ nameOfTheBand: req.params.nameOfTheBand });
    res.send(music);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};

exports.get_band_when_reserved = async (req, res) => {
  try {
    const music = await Music.find({
      dateReserved: req.params.dateReserved,
    });
    res.send(music);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving salons");
  }
};

exports.get_music_by_service = async (req, res) => {
  const typeOfService = req.params.typeOfService;
  try {
    const music = await Music.find({
      "service.typeOfService": typeOfService,
    });
    res.json(music);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
