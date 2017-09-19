
var mongoose = require('mongoose'), 
    Listing = require('../models/listings.server.model.js');


exports.create = function(req, res) {
	var listing = new Listing(req.body);

  if(req.results) {
    listing.coordinates = {
      latitude: req.results.lat, 
      longitude: req.results.lng
    };
  }

  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
    }
  });
};

exports.read = function(req, res) {

  res.json(req.listing);
};


exports.update = function(req, res) {
  var listing = req.listing;


  listing.name = req.body.name;
  listing.code = req.body.code;
  listing.address = req.body.address;

  if(req.results) {
    listing.coordinates = {
      latitude: req.results.lat, 
      longitude: req.results.lng
    };
  }


  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
    }
  });
};

exports.delete = function(req, res) {
  var listing = req.listing;


  listing.remove(function(err) {
    if(err) {
      res.status(400).send(err);
    }
    else {
      res.end();
    }
  })
};


exports.list = function(req, res) {
  Listing.find().sort('code').exec(function(err, listings) {
    if(err) {
      res.status(400).send(err);
    } else {
      res.json(listings);
    }
  });
};
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};