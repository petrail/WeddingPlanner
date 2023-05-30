const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const coordinatorSchema = mongose.Schema(
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
    picture: {
      type: Buffer,
      required: [false, "Unesite sliku"],
    },
    email: {
      type: String,
      required: [true, "Unesite E-mail"],
    }
  },
  {
    timestamps: true,
  }
);

const Coordinator = mongoose.model("Coordinator", coordinatorSchema);
module.exports = Coordinator;
