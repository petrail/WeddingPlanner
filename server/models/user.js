const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const userSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime"],
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
      required: [false, "Unesite sliku"],

    },
    usluge :{type:[Object]}
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
