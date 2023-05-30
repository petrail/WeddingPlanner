const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const groomSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime butika"],
    },
    service: [{typeOfServide: String, color:String, price:Number, size:String, img:Buffer}],

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

const Groom = mongoose.model("Groom", groomSchema);
module.exports = Groom;
