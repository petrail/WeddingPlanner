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
    link: {
      type: String,
      required: [true, "Unesite link"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona"],
    },
    maxNumberGuests: {
      type: Number,
      required: [true, "Unesite maximalan broj gostiju"],
    },
    service: [{descMenu: String, priceMenu: Number, img:Buffer}],

    parking: {
      type: Boolean,
      required: [false, "Unesite da li ima parking"],
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
