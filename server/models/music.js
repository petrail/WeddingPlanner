const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')


const musicSchema = mongose.Schema (
{
    nameOfTheBand: {
        type: String,
        required: [true, "Unesite ime benda"]
    },
    link: {
        type: String,
        required: [true, "Unesite link stranice benda"]
    },
    phoneNumber: {
        type: String,
         required: [true, "Unesite broj telefona benda"]
    },

    service: [{typeOfService: String, price:Number, img:Buffer}],

    dateReserved: {
            type: [Date],
            required: [true, "Unesite datume kada je bend. rezervisan"]
        },
        description: {
          type: String
        }
    },
    {
        timestamps: true
    }
)

const Music = mongoose.model('Music', musicSchema);
module.exports = Music;