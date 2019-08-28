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
    instance = new DeepVissOps.PackedPrefetch();
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

  describe('PackedPrefetch', function() {
    it('should create an instance of PackedPrefetch', function() {
      // uncomment below and update the code to test PackedPrefetch
      //var instane = new DeepVissOps.PackedPrefetch();
      //expect(instance).to.be.a(DeepVissOps.PackedPrefetch);
    });

    it('should have the property profiles (base name: "profiles")', function() {
      // uncomment below and update the code to test the property profiles
      //var instane = new DeepVissOps.PackedPrefetch();
      //expect(instance).to.be();
    });

  });

}));