const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const chatSchema = mongose.Schema(
  {
    member_ids:{
      type:[String]
    },
    messages: [{
      content:String,
      user: {
        name: String,
        id: String,
      },
      date:String,
    }],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
