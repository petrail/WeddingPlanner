const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const userSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime"],
    },
    lastname: {
      type: String,
      required: [true, "Unesite prezime"],
    },
    username: {
      type: String,
      required: [true, "Unesite korisnicko ime"],
    },
    password: {
      type: String,
      required: [true, "Unesite sifru"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona"],
    },
    email: {
      type: String,
      required: [true, "Unesite E-mail"],
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
