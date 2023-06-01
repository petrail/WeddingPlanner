const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const brideSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime butika"],
    },

    service: [{typeOfService: String, price: Number, size: Number, img:Buffer}],

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
    description: {
      type: String
    }

  },
  {
    timestamps: true,
  }
);

const Bride = mongoose.model("Bride", brideSchema);
module.exports = Bride;
