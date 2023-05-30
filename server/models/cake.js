const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const cakeSchema = mongose.Schema(
  {
    nameOfTheWafery: {
      type: String,
      required: [true, "Unesite ime poslasticare"],
    },

    cakes: [{nameOfTheCake:String, priceByKG:Number, img:Buffer}],

    location: {
      type: String,
      required: [true, "Unesite lokaciju poslasticare"],
    },
    link: {
      type: String,
      required: [false, "Unesite link poslasticare"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona poslasticare"],
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Cake = mongoose.model("Cake", cakeSchema);
module.exports = Cake;
