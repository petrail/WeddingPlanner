const User = require("../models/user");
const userService = require("../service/userService");
//const userService = require("../service/userService")
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

const put_user = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
    const updatedUser = await User.findById(id);
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

    const userId = req.params.id; // Assuming you have a route parameter for the user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("buffer je: ");
    console.log(req.file.buffer);
    //user.picture = {};
    user.picture.type = req.file.buffer;
    //user.picture.contentType = req.file.mimetype;

    await user.save();

    res.status(200).json({ message: "Picture updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/* const post_picture_for_user = async (req, res) => {
  console.log("request is: ");
  console.log(req);
  console.log("file is: " + req.file);
  const user = new User({
    picture: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
  });

  await user.save();
  res.redirect("/user");
}; */

/*const createUserController = async(req, res) => {
  try {
    console.log(req.body);
    const status = await userService.createUserDBService(req.body);
    console.log(status);
    if(status) {
      res.send({"status": true, "message": "User created succsessfully"});
    } else {
      res.send({"status": false, "message": "Error creating user"});
    }
    
  } catch (error) {
    console.log(error);
  }
};
const loginUserController = async(req, res) => {
  var result = null;
  try {
    result = await userService.loginUserDBService(req.body);
    if(result.status) {
      res.send({"status": true, "message": "User created succsessfully"});
    } else {
      res.send({"status": false, "message": "Error creating user"});
    
    } 
   }catch (error) {
    console.log(error);
  }
};*/

//@desc Register a user
//@route POST /api/users/register
//@access public
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
  get_user_by_id,
  get_user_by_name,
  get_user_by_username,
  delete_user_by_username,
  post_picture_for_user,
  registerUser,
  get_user_by_email,
};
