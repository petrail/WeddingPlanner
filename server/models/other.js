const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const otherSchema = mongose.Schema(
  {
    nameOfTheStore: {
      type: String,
      required: [true, "Unesite ime"],
    },
    location: {
      type: String,
      required: [false, "Unesite lokaciju"],
    },
    link: {
      type: String,
      required: [false, "Unesite link"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona"],
    },
    service: [{typeOfService: String, price:Number, img:Buffer}]
  },
  {
    timestamps: true,
  }
);

const Other = mongoose.model("Other", otherSchema);
module.exports = Other;
