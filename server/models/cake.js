const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const cakeSchema = mongose.Schema(
  {
    nameOfTheCake: {
      type: String,
      required: [true, "Unesite ime torte"],
    },
    nameOfTheWafery: {
      type: String,
      required: [true, "Unesite ime poslasticare"],
    },
    image: {
      type: String,
      required: [true, "Unesite sliku torte"],
    },
    location: {
      type: String,
      required: [true, "Unesite lokaciju poslasticare"],
    },
    link: {
      type: String,
      required: [true, "Unesite link poslasticare"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona poslasticare"],
    },
    priceByKG: {
      type: Number,
      required: [true, "Unesite cenu torte"],
    },
  },
  {
    timestamps: true,
  }
);

const Cake = mongoose.model("Cake", cakeSchema);
module.exports = Cake;
