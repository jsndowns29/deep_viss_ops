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
    instance = new DeepVissOps.ObjectProfile();
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

  describe('ObjectProfile', function() {
    it('should create an instance of ObjectProfile', function() {
      // uncomment below and update the code to test ObjectProfile
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be.a(DeepVissOps.ObjectProfile);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

    it('should have the property collectionId (base name: "collectionId")', function() {
      // uncomment below and update the code to test the property collectionId
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

    it('should have the property croppedImageURLs (base name: "croppedImageURLs")', function() {
      // uncomment below and update the code to test the property croppedImageURLs
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

    it('should have the property instances (base name: "instances")', function() {
      // uncomment below and update the code to test the property instances
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

    it('should have the property occurrences (base name: "occurrences")', function() {
      // uncomment below and update the code to test the property occurrences
      //var instane = new DeepVissOps.ObjectProfile();
      //expect(instance).to.be();
    });

  });

}));
