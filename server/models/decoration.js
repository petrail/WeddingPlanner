const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const decorationSchema = mongose.Schema(
  {
    nameOfTheStore: {
      type: String,
      required: [true, "Unesite ime torte"],
    },
    image: {
      type: [String],
      required: [true, "Unesite sliku dekoracije"],
    },
    location: {
      type: String,
      required: [true, "Unesite lokaciju prodavnice dekoracije"],
    },
    link: {
      type: String,
      required: [true, "Unesite link prodavnice dekoracije"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona prodavnice dekoracije"],
    },
    price: {
      type: [Number],
      required: [true, "Unesite cenu dekoracije"],
    },
    typeOfService: {
      type: [String],
      required: [true, "Unesite tip usluge"],
    },
  },
  {
    timestamps: true,
  }
);

const Decoration = mongoose.model("Decortion", decorationSchema);
module.exports = Decoration;
