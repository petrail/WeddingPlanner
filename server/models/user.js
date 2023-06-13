const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const userSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime"],
    },
    userType: {
      type: String,
      enum: ["Admin", "Koordinator"],
    },
    username: {
      type: String,
      required: [true, "Unesite korisnicko ime"],
    },
    password: {
      type: String,
      required: [true, "Unesite sifru"],
    },
    email: {
      type: String,
      required: [true, "Unesite E-mail"],
      unique: [true, "Email address already taken"],
    },
    picture: {
      type: Buffer,
      contentType: String,
    },
    usluge: { type: [Object] },
    chats: {
      type: [String],
    },
    reserved: {
      type: [String],
    },
    liked: { type: [String] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
