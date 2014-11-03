'use strict'
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

var expect = chai.expect;
var app = require("../server.js");

describe ('app', function(){
  describe('Simple JSON API', function() {
    it('should send the local time', function(done){
      chai.request(app)
      .get("/time")
      .end(function(err, res){
        expect(err).to.be.null
        expect(res.body.hour).to.at.most(23);
        expect(res.body.minute).to.eql(new Date().getMinutes())
        done();
      });
    });
    it('should greet someone', function(done){
      chai.request(app)
      .get("/usr/scott")
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res.body.message).to.equal('Hey there scott!!');
        done();
      });
    });
  });
});

