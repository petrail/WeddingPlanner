const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const restaurantSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime restorana"],
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
      required: [true, "Unesite link"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona"],
    },
    numberGuests: {
      type: Number,
      required: [true, "Unesite maximalan broj gostiju"],
    },
    priceMenu1: {
      type: Number,
      required: [false, "Unesite cenu po menija 1"],
    },
    priceMenu2: {
      type: Number,
      required: [false, "Unesite cenu po menija 2"],
    },
    priceMenu3: {
      type: Number,
      required: [false, "Unesite cenu po menija 3"],
    },
    descMenu1: {
      type: String,
      required: [false, "Unesite opis menija 1"],
    },
    descMenu2: {
      type: String,
      required: [false, "Unesite opis menija 2"],
    },
    descMenu3: {
      type: String,
      required: [false, "Unesite opis menija 3"],
    },
    parking: {
      type: Boolean,
      required: [true, "Unesite da li ima parking"],
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

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
