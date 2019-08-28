/**
 * DeepVISS OPS
 * DeepVISS (Deep Vision Interoperability Specification Standard) allows several computer vision solutions to produce, consume and exchange events in the same format.
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: office@deepviss.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DeepVissOps);
  }
}(this, function(expect, DeepVissOps) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DeepVissOps.ObjectMatch();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ObjectMatch', function() {
    it('should create an instance of ObjectMatch', function() {
      // uncomment below and update the code to test ObjectMatch
      //var instane = new DeepVissOps.ObjectMatch();
      //expect(instance).to.be.a(DeepVissOps.ObjectMatch);
    });

    it('should have the property matchType (base name: "matchType")', function() {
      // uncomment below and update the code to test the property matchType
      //var instane = new DeepVissOps.ObjectMatch();
      //expect(instance).to.be();
    });

    it('should have the property algorithm (base name: "algorithm")', function() {
      // uncomment below and update the code to test the property algorithm
      //var instane = new DeepVissOps.ObjectMatch();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instane = new DeepVissOps.ObjectMatch();
      //expect(instance).to.be();
    });

    it('should have the property collectionId (base name: "collectionId")', function() {
      // uncomment below and update the code to test the property collectionId
      //var instane = new DeepVissOps.ObjectMatch();
      //expect(instance).to.be();
    });

    it('should have the property profileId (base name: "profileId")', function() {
      // uncomment below and update the code to test the property profileId
      //var instane = new DeepVissOps.ObjectMatch();
      //expect(instance).to.be();
    });

    it('should have the property matchRate (base name: "matchRate")', function() {
      // uncomment below and update the code to test the property matchRate
      //var instane = new DeepVissOps.ObjectMatch();
      //expect(instance).to.be();
    });

  });

}));