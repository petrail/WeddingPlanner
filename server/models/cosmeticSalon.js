const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const cosmeticSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime kozmetickog salona"],
    },
    pictureMakeUp: {
      type: String,
      required: [false, "Unesite sliku sminke"],
    },
    pictureHair: {
      type: String,
      required: [false, "Unesite sliku frizure"],
    },
    pictureNails: {
      type: String,
      required: [false, "Unesite sliku noktiju"],
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
    priceMakeUp: {
      type: Number,
      required: [true, "Unesite cenu sminke"],
    },
    priceHair: {
      type: Number,
      required: [true, "Unesite cenu frizure"],
    },
    priceNails: {
      type: Number,
      required: [true, "Unesite cenu noktiju"],
    },
    dateReserved: {
      type: [Date],
      required: [true, "Unesite datume kada je restoran rezervisan"],
    },
  },
  {
    timestamps: true,
  }
);

const CosmeticSalon = mongoose.model("CosmeticSalon", cosmeticSchema);
module.exports = CosmeticSalon;
