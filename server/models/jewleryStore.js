const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const jewlerySchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime zlatare"],
    },
    picture: {
      type: String,
      required: [true, "Unesite sliku"],
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
    price: {
      type: Number,
      required: [true, "Unesite cenu"],
    },
    typeOfJewlery: {
      type: String,
      required: [true, "Unesite tip nakita"],
    },
  },
  {
    timestamps: true,
  }
);

const JewelleryStore = mongoose.model("JewelleryStore", jewlerySchema);
module.exports = JewelleryStore;
