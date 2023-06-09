const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const chatSchema = mongose.Schema(
  {
    user_id:{
      type:String,
      required:true
    },
    coord_user_id:{
      type:String,
      required:true,
    },
    message: [{
      content:String,
      user: String,
      date:String,
    }],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
