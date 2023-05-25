const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const cosmeticSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime kozmetickog salona"],
    },

    service: [{typeOfService: String, price:Number, img:Buffer}],

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
    dateReserved: {
      type: [Date],
      required: [true, "Unesite datume kada je restoran rezervisan"],
    }
  },
  {
    timestamps: true,
  }
);

const CosmeticSalon = mongoose.model("CosmeticSalon", cosmeticSchema);
module.exports = CosmeticSalon;
