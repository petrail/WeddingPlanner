const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')


const musicSchema = mongose.Schema (
{
    nameOfTheBand: {
        type: String,
        required: [true, "Unesite ime benda"]
    },
    image: {
        type: String,
        required: [true, "Unesite sliku benda"]
    },
    link: {
        type: String,
        required: [true, "Unesite link stranice benda"]
    },
    phoneNumber: {
        type: String,
         required: [true, "Unesite broj telefona benda"]
    },
    price: {
        type: Number,
        required: [true, "Unesite cenu repertoara"]
    },
    typeOfService: {
         type: String,
         required: [true, "Unesite tip muzike: DJ, trubaci ili bend"]
    },
        dateReserved: {
            type: [Date],
            required: [true, "Unesite datume kada je bend. rezervisan"]
        }
    },
    {
        timestamps: true
    }
)

const Music = mongoose.model('Music', musicSchema);
module.exports = Music;