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
    instance = new DeepVissOps.ProcessingRequest();
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

  describe('ProcessingRequest', function() {
    it('should create an instance of ProcessingRequest', function() {
      // uncomment below and update the code to test ProcessingRequest
      //var instane = new DeepVissOps.ProcessingRequest();
      //expect(instance).to.be.a(DeepVissOps.ProcessingRequest);
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new DeepVissOps.ProcessingRequest();
      //expect(instance).to.be();
    });

    it('should have the property regionsOfInterest (base name: "regionsOfInterest")', function() {
      // uncomment below and update the code to test the property regionsOfInterest
      //var instane = new DeepVissOps.ProcessingRequest();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instane = new DeepVissOps.ProcessingRequest();
      //expect(instance).to.be();
    });

    it('should have the property frameId (base name: "frameId")', function() {
      // uncomment below and update the code to test the property frameId
      //var instane = new DeepVissOps.ProcessingRequest();
      //expect(instance).to.be();
    });

    it('should have the property frameCounter (base name: "frameCounter")', function() {
      // uncomment below and update the code to test the property frameCounter
      //var instane = new DeepVissOps.ProcessingRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceId (base name: "sourceId")', function() {
      // uncomment below and update the code to test the property sourceId
      //var instane = new DeepVissOps.ProcessingRequest();
      //expect(instance).to.be();
    });

  });

}));
