const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const adminSchema = mongose.Schema(
  {
    username: {
      type: String,
      required: [true, "Unesite korisnicko ime"],
    },
    password: {
      type: String,
      required: [true, "Unesite sifru"],
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
