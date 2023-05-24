const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const brideSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime butika"],
    },
    pictureDress: {
      type: String,
      required: [false, "Unesite sliku vencanjice"],
    },
    pictureHeels: {
      type: String,
      required: [false, "Unesite sliku stikli"],
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
    priceDress: {
      type: Number,
      required: [true, "Unesite cenu vencanice"],
    },
    priceHeels: {
      type: Number,
      required: [true, "Unesite cenu stikli"],
    },
    numberHeels: {
      type: [Number],
      required: [true, "Unesite dostupne velicine za stikle"],
    },
    numberDress: {
      type: [Number],
      required: [true, "Unesite dostupne velicine za vencanice"],
    },
    colorOfHeels: {
      type: [String],
      required: [true, "Unesite dostupne boju dostupnih stikli"],
    },
  },
  {
    timestamps: true,
  }
);

const Bride = mongoose.model("Bride", brideSchema);
module.exports = Bride;
