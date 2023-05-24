const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const groomSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime butika"],
    },
    pictureSuit: {
      type: String,
      required: [false, "Unesite sliku odela"],
    },
    pictureBoots: {
      type: String,
      required: [false, "Unesite sliku cipela"],
    },
    location: {
      type: String,
      required: [true, "Unesite lokaciju"],
    },
    link: {
      type: String,
      required: [true, "Unesite link"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona"],
    },
    priceSuit: {
      type: Number,
      required: [true, "Unesite cenu odela"],
    },
    priceBoots: {
      type: Number,
      required: [true, "Unesite cenu cipela"],
    },
    numberBoots: {
      type: [Number],
      required: [true, "Unesite dostupne velicine za cipele"],
    },
    numberSuit: {
      type: [Number],
      required: [true, "Unesite dostupne velicine za odela"],
    },
    colorOfSuit: {
      type: [String],
      required: [true, "Unesite dostupne boju dostupnih odela"],
    },
    colorOfBoots: {
      type: [String],
      required: [true, "Unesite dostupne boju dostupnih cipeli"],
    },
  },
  {
    timestamps: true,
  }
);

const Groom = mongoose.model("Groom", groomSchema);
module.exports = Groom;
