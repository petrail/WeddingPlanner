const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const serviceSchema = mongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Unesite ime usluge"],
    },
    type:{
      type:String,
      enum:['Muzika','Restorani','Burme','Dekoracija','Za mladu','Za mladozenju','Maticari','Fotografisanje','Casovi plesa','Kozmeticki salon', 'Torte', 'Ostalo'],
      required: [true, "Podesite tip usluge"],
    },
    location: {
        type: String,
        required: [true, "Unesite lokaciju"],
    },
    description:{
        type:String,
        required: [true, "Upisite opis usluge"],
    },
    servicePrice:{
        price:{
            Number,
            required: [true, "Unesite cenu"],
        },
        unit:String
    },
    link: {
      type: String,
      required: [false, "Unesite link"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Unesite broj telefona"],
    },
    imgs: [{
        data: Buffer,
        contentType: String
    }],
    reviews:[{
        comment:String,
        grade: Number,
        date: String,
        user: String,
    }],
    reserved_dates:[{
        date:String,
    }],
    //Specific to clothes
    color:{
        type:String,
    },
    size:{
        type:String,
    },
    //Specific to cosmetic salons, bride/groom
    subservice:{
        type:String,
    },
    //Specific to restaurants
    menus:[{
        name:String,
        price:Number,
        items:[{
            item_name:String
        }]
    }],
    max_guest_number:Number,
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
