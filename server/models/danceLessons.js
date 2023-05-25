const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const danceSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime plesnog studia"],
    },
    location: {
      type: String,
      required: [true, "Unesite lokaciju"],
    },
    picture: {
      type: Buffer,
      required: [true, "Unesite sliku"],
    },
    link: {
      type: String,
      required: [false, "Unesite link"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona"],
    },
    priceIndividual: {
      type: Number,
      required: [false, "Unesite cenu za individualne casove"],
    },
    priceGroup: {
      type: Number,
      required: [false, "Unesite cenu za grupne casove"],
    },
  },
  {
    timestamps: true,
  }
);

const DanceLessons = mongoose.model("DanceLessons", danceSchema);
module.exports = DanceLessons;
