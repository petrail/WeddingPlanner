const DanceLessonsService = require("../models/service");
const post_dance_lesson = async (req, res) => {
  try {
    const danceLessons = await DanceLessonsService.create(req.body);
    res.status(200).json(danceLessons);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const get_all_lessons = async (req, res) => {
  try {
    const dance = await DanceLessonsService.find({type : 'Casovi plesa'});
    res.status(200).json(dance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const put_dance_lesson = async (req, res) => {
  try {
    const { id } = req.params;
    const dance = await DanceLessonsService.findByIdAndUpdate(id, req.body);
    if (!dance) {
      return res
        .status(404)
        .json({ message: `Dance lessons with id ${id} not found` });
    }
    const updatedDance = await DanceLessonsService.findById(id);
    res.status(200).json(updatedDance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const delete_dance_lesson = async (req, res) => {
  try {
    const { id } = req.params;
    const dance = await DanceLessonsService.findByIdAndDelete(id);
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

module.exports = {
  post_dance_lesson,
  get_all_lessons,
  put_dance_lesson,
  delete_dance_lesson
};

