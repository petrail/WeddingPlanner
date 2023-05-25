const DanceLessons = require("../models/danceLessons");
exports.post_dance_lessons = async (req, res) => {
  try {
    const danceLessons = await DanceLessons.create(req.body);
    res.status(200).json(danceLessons);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_lessons = async (req, res) => {
  try {
    const dance = await DanceLessons.find({});
    res.status(200).json(dance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.put_dance_lessons = async (req, res) => {
  try {
    const { id } = req.params;
    const dance = await DanceLessons.findByIdAndUpdate(id, req.body);
    if (!dance) {
      return res
        .status(404)
        .json({ message: `Dance lessons with id ${id} not found` });
    }
    const updatedDance = await DanceLessons.findById(id);
    res.status(200).json(updatedDance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete_dance_lesson = async (req, res) => {
  try {
    const { id } = req.params;
    const dance = await DanceLessons.findByIdAndUpdate(id);
    if (!dance) {
      return res
        .status(404)
        .json({ message: `Dance lesson with id ${id} not found` });
    }
    res.status(200).json(dance);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
exports.get_dance_studio_by_name = async (req, res) => {
  try {
    const { name } = req.params;
    const dance = await DanceLessons.findOne({ name: name });
    if (!dance) {
      return res
        .status(404)
        .json({ message: `Dance studio called ${name} not found` });
    }
    res.status(200).json(dance);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_nearest_dance_studio = async (req, res) => {
  try {
    const { location } = req.params;
    const dance = await DanceLessons.findAll({ location: location });
    if (!dance) {
      return res.status(404).json({ message: "Dance studio not found" });
    }
    res.status(200).json(dance);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
