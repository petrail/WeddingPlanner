/*var User = require("./models/user");
var Coordinator = require("./models/coordinator");


module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Morate biti prijavljeni za pristup!');
      res.redirect('/login');
    },
    isAdmin: function(req, res, next) {
        if (req.isAuthenticated()) {
            if(req.user.type=="admin"){
                return next();
            }else {
                req.flash("error_msg", "Nemate pravo pristupa!");
                res.redirect('/shopmain');
            }
         }else{
        req.flash('error_msg', 'Morate biti prijavljeni za pristup!');
        res.redirect('/login');
        }
    },
    isAutorized: function(req, res, next){
      if(req.isAuthenticated()){
          Coordinator.findById(req.params._id, function(err, Coordinator){
             if(Coordinator.author.id.equals(req.user._id) || req.user.type=="admin"){
                 next();
             } else {
                 req.flash("error_msg", "Nemate pravo pristupa!");
                 res.redirect("/shopmain/" + req.params.id);
             }
          });
      } else {
          req.flash("error_msg", "Morate biti prijavljeni za pristup!");
          res.redirect("/login");
      }
  },
  UserAuthorized: function(req, res, next){
    if(req.isAuthenticated()){
        User.findById(req.params.id, function(err, User){
           if(User.author.id.equals(req.user._id) || req.user.type=="admin"){
               next();
           } else {
               req.flash("error_msg", "Nemate pravo pristupa!");
               res.redirect("/shopmain/" + req.params.id);
           }
        });
    } else {
        req.flash("error_msg", "Morate biti prijavljeni za pristup!");
        res.redirect("/login");
    }
} 
};*/