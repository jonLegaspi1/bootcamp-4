//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://mrmaster3:A27WH!uP@ds123124.mlab.com:23124/assignment3', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyCl_b2RBI15p03kjhfq9sWsa75zXdFnDC4'
  },
  port: 8080
};