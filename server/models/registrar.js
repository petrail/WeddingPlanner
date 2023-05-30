const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const registratSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime foto studia"],
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
    price: {
      type: Number,
      required: [true, "Unesite cenu"],
    },
    township: {
      type: String,
      required: [true, "Unesite opstinu"],
    },
    numberOfRegistrar: {
      type: Number,
      required: [true, "Unesite broj maticara"],
    },
    dateReserved: {
      type: [Date],
      required: [true, "Unesite datume kada je restoran rezervisan"],
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Registrar = mongoose.model("Registrar", registratSchema);
module.exports = Registrar;
