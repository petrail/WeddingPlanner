const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const chatSchema = mongose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
