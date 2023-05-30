const userModel = require("../models/user");
const key = '123456789trydnjkndknl2';
var enctryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        const userModelData = new userModel();
        userModelData.name = userDetails.name;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;
        userModelData.username = userDetails.username;
        const encrypted = enctryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;
        
        userModelData.save()
      .then((result) => {
        resolve(true);
      })
      .catch((error) => {
        reject(false);
      });
    });
};

module.exports.loginUserDBService = (userDetails) => {
    return new Promise(function(resolve, reject) {
      userModel.findOne({ email: userDetails.email })
        .then((result) => {
          if (result != undefined && result != null) {
            let decrypted = enctryptor.decrypt(result.password);
            if (decrypted==null) decrypted = result.password;

            if (decrypted == userDetails.password) {
              resolve({ status: true, msg: "User validated successfully" });
            } else {
              reject({ status: false, msg: "User validated error" });
            }
          } else {
            reject({ status: false, msg: "Invalid user validated error" });
          }
        })
        .catch((error) => {
          console.log(error);
          reject({ status: false, msg: "Invalid data" });
        });
    });
  };
  