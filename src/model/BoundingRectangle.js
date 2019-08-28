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

import ApiClient from '../ApiClient';

/**
 * The BoundingRectangle model module.
 * @module model/BoundingRectangle
 * @version 1.3.0
 */
class BoundingRectangle {
    /**
     * Constructs a new <code>BoundingRectangle</code>.
     * @alias module:model/BoundingRectangle
     * @param top {Number} Top-most position, in pixels, of of the bounding rectangle
     * @param left {Number} Left-most position, in pixels, of of the bounding rectangle
     * @param width {Number} Width, in pixels, of the bounding rectangle
     * @param height {Number} Height, in pixels, of the bounding rectangle
     */
    constructor(top, left, width, height) { 
        
        BoundingRectangle.initialize(this, top, left, width, height);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, top, left, width, height) { 
        obj['top'] = top;
        obj['left'] = left;
        obj['width'] = width;
        obj['height'] = height;
    }

    /**
     * Constructs a <code>BoundingRectangle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BoundingRectangle} obj Optional instance to populate.
     * @return {module:model/BoundingRectangle} The populated <code>BoundingRectangle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BoundingRectangle();

            if (data.hasOwnProperty('top')) {
                obj['top'] = ApiClient.convertToType(data['top'], 'Number');
            }
            if (data.hasOwnProperty('left')) {
                obj['left'] = ApiClient.convertToType(data['left'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Top-most position, in pixels, of of the bounding rectangle
 * @member {Number} top
 */
BoundingRectangle.prototype['top'] = undefined;

/**
 * Left-most position, in pixels, of of the bounding rectangle
 * @member {Number} left
 */
BoundingRectangle.prototype['left'] = undefined;

/**
 * Width, in pixels, of the bounding rectangle
 * @member {Number} width
 */
BoundingRectangle.prototype['width'] = undefined;

/**
 * Height, in pixels, of the bounding rectangle
 * @member {Number} height
 */
BoundingRectangle.prototype['height'] = undefined;






export default BoundingRectangle;

