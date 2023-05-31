const MusicService = require("../models/service");

exports.post_music = async (req, res) => {
  try {
    const music = await MusicService.create(req.body);
    res.status(200).json(music);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_music = async (req, res) => {
  try {
    const music = await MusicService.find({type : 'Muzika'});
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_music = async (req, res) => {
  try {
    const { id } = req.params;
    const music = await MusicService.findByIdAndUpdate(id, req.body);
    if (!music) {
      return res
        .status(404)
        .json({ message: `Music band with id ${id} not found` });
    }
    const updatedMusic = await MusicService.findById(id);
    res.status(200).json(updatedMusic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_music = async (req, res) => {
  try {
    const { id } = req.params;
    const music = await MusicService.findByIdAndDelete(id);
    if (!music) {
      return res.status(404).json({ message: `Music with id ${id} not found` });
    }
    res.status(200).json(music);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
