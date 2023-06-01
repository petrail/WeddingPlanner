const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const decorationSchema = mongose.Schema(
  {
    nameOfTheStore: {
      type: String,
      required: [true, "Unesite ime torte"],
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
    service: [{typeOfService: String, price:Number, img:Buffer}],
    description: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Decoration = mongoose.model("Decortion", decorationSchema);
module.exports = Decoration;
