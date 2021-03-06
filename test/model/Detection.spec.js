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
    instance = new DeepVissOps.Detection();
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

  describe('Detection', function() {
    it('should create an instance of Detection', function() {
      // uncomment below and update the code to test Detection
      //var instane = new DeepVissOps.Detection();
      //expect(instance).to.be.a(DeepVissOps.Detection);
    });

    it('should have the property boundingRectangle (base name: "boundingRectangle")', function() {
      // uncomment below and update the code to test the property boundingRectangle
      //var instane = new DeepVissOps.Detection();
      //expect(instance).to.be();
    });

    it('should have the property orientation (base name: "orientation")', function() {
      // uncomment below and update the code to test the property orientation
      //var instane = new DeepVissOps.Detection();
      //expect(instance).to.be();
    });

    it('should have the property algorithm (base name: "algorithm")', function() {
      // uncomment below and update the code to test the property algorithm
      //var instane = new DeepVissOps.Detection();
      //expect(instance).to.be();
    });

    it('should have the property keypoints (base name: "keypoints")', function() {
      // uncomment below and update the code to test the property keypoints
      //var instane = new DeepVissOps.Detection();
      //expect(instance).to.be();
    });

    it('should have the property segmentedKeypoints (base name: "segmentedKeypoints")', function() {
      // uncomment below and update the code to test the property segmentedKeypoints
      //var instane = new DeepVissOps.Detection();
      //expect(instance).to.be();
    });

    it('should have the property confidence (base name: "confidence")', function() {
      // uncomment below and update the code to test the property confidence
      //var instane = new DeepVissOps.Detection();
      //expect(instance).to.be();
    });

  });

}));
