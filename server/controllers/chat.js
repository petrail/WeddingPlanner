const Chat = require("../models/chat");
const User = require("../models/user")
exports.get_chat = async (req, res) => {
  try {
    const {first_id, second_id} = req.body;
    let ids = [first_id,second_id];
    let created=false;
    let chat = await Chat.find({ member_ids:ids });
    if(chat.length==0){
        ids = [second_id,first_id];
        chat = await Chat.find({ member_ids:ids });
        if(chat.length==0){
            console.log("DODAJ");
            created=true;
            chat = await Chat.create({
                member_ids:[first_id,second_id],
                messages:[],
            });
            let first_user = await User.findById(first_id);
            first_user.chats.push(second_id);
            await User.findByIdAndUpdate(first_id,first_user);
            let second_user = await User.findById(second_id);
            second_user.chats.push(first_id);
            await User.findByIdAndUpdate(second_id,second_user);
        }
    }
    if(!created) chat = chat[0];
    let resp = {
        id:chat._id,
        messages:chat.messages
    }
    res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.add_message = async (req, res) => {
    try {
      const {id, msg} = req.body;
      let chat = await Chat.findById(id);
      if(!chat){
        return res.status(404).json({ message: `Chat with id ${id} not found` });
      }
      chat.messages.push(msg);
      await Chat.findByIdAndUpdate(id,chat);
      res.status(200).json(chat);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  };
  