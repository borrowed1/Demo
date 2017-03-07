var Config = module.exports = {
  //---------------------
  //Main Configurations
  //---------------------
  port: 8000,

  jwtSecret: '473y0NS2MeTg6S4U6R6MB10gFA7tsEb0',

  //---------------------
  //Login Configurations
  //---------------------

  //Needs to be the same as Client firstHash
  firstHash: 'd28cb767c4272d8ab91000283c67747cb2ef7cd1',

  //Mail to send activation codes from
  mailFrom: 'smtps://sakuragirlacademy@gmail.com:renaichu123@smtp.gmail.com',

  //Activation API Location
  actUrl: 'http://localhost:8000/activate/',

  //------------------------
  //Database Configurations
  //------------------------

  mongoDBconnect: 'mongodb://borrowed:renaichu123@ds119020.mlab.com:19020/sakura'
};
