const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const post_user = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const get_all_users = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const filter_users_name = async (req, res) => {
  try {
    const { name } = req.body;
    const users = await User.find({ name: { $regex: name, $options: "i" } });
    let to_return = [];
    users.forEach((user) => {
      to_return.push({
        _id: user._id,
        name: user.name,
        img: user.picture,
      });
    });
    res.status(200).json(to_return);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const get_users_with_ids = async (req, res) => {
  try {
    const { ids } = req.body;
    const users = await User.find({ _id: { $in: ids } });
    let to_return = [];
    users.forEach((user) => {
      to_return.push({
        _id: user._id,
        name: user.name,
        img: user.picture,
      });
    });
    res.status(200).json(to_return);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const put_user = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }

    // Check if the request body contains the password field
    if (req.body.password) {
      // Encrypt the new password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }

    // Update the user with the request body
    await User.findByIdAndUpdate(id, req.body);

    // Fetch the updated user
    const updatedUser = await User.findById(id);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const add_liked = async (req, res) => {
  try {
    const { user_id, service_id } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with id ${user_id} not found` });
    }
    if (user.liked === undefined) user.liked = [];
    if (user.liked.includes(service_id)) {
      return res.status(404).json({ message: `Service already liked!` });
    }
    let updated = user;
    if (updated.liked == null) updated.liked = [];
    updated.liked.push(service_id);

    await User.findByIdAndUpdate(user_id, updated);

    const updatedUser = await User.findById(user_id);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const add_reserved = async (req, res) => {
  try {
    const { user_id, service_id } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with id ${user_id} not found` });
    }
    if (user.reserved.includes(service_id)) {
      return res.status(404).json({ message: `Service already reserved!` });
    }
    let updated = user;
    if (updated.reserved == null) updated.reserved = [];
    updated.reserved.push(service_id);

    await User.findByIdAndUpdate(user_id, updated);

    const updatedUser = await User.findById(user_id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const remove_liked = async (req, res) => {
  try {
    const { user_id, service_id } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with id ${user_id} not found` });
    }
    if (!user.liked.includes(service_id)) {
      return res.status(404).json({ message: `Service not liked!` });
    }
    let updated = user;
    const index = updated.liked.indexOf(service_id);
    updated.liked.splice(index, 1);

    await User.findByIdAndUpdate(user_id, updated);

    const updatedUser = await User.findById(user_id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const delete_user = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const delete_user_by_username = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find(username);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**/
const get_user_by_name = async (req, res) => {
  try {
    const { name } = req.params;
    const users = await User.find({ name });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const get_user_by_username = async (req, res) => {
  try {
    const { username } = req.params;
    const users = await User.find({ username });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**/
const get_user_by_id = async (req, res) => {
  try {
    const users = await User.find({ _id: req.params.id });
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};
const get_user_by_email = async (req, res) => {
  try {
    const users = await User.find({ email: req.params.email });
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
};
const post_picture_for_user = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Access the file buffer from the multer upload
    const pictureBuffer = req.file.buffer;

    // Save the picture buffer to the user's picture field in the database
    user.picture = pictureBuffer;
    await user.save();
    const imageUrl = `http://localhost:3000/images/${req.file.filename}`;

    res.status(200).json({ message: "Picture updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    name,
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data us not valid");
  }
  res.json({ message: "Register the user" });
});

module.exports = {
  get_all_users,
  post_user,
  put_user,
  delete_user,
  get_users_with_ids,
  get_user_by_id,
  get_user_by_name,
  get_user_by_username,
  delete_user_by_username,
  post_picture_for_user,
  registerUser,
  get_user_by_email,
  add_liked,
  add_reserved,
  remove_liked,
  filter_users_name,
};
