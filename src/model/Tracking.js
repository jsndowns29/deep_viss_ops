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
 * The Tracking model module.
 * @module model/Tracking
 * @version 1.3.0
 */
class Tracking {
    /**
     * Constructs a new <code>Tracking</code>.
     * @alias module:model/Tracking
     */
    constructor() { 
        
        Tracking.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tracking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tracking} obj Optional instance to populate.
     * @return {module:model/Tracking} The populated <code>Tracking</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tracking();

            if (data.hasOwnProperty('trackingId')) {
                obj['trackingId'] = ApiClient.convertToType(data['trackingId'], 'String');
            }
            if (data.hasOwnProperty('contextId')) {
                obj['contextId'] = ApiClient.convertToType(data['contextId'], 'String');
            }
            if (data.hasOwnProperty('confidence')) {
                obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The tracking Id of the object
 * @member {String} trackingId
 */
Tracking.prototype['trackingId'] = undefined;

/**
 * The context from which the tracking originated
 * @member {String} contextId
 */
Tracking.prototype['contextId'] = undefined;

/**
 * The confidence that the object is tracked correctly and consistently.
 * @member {Number} confidence
 */
Tracking.prototype['confidence'] = undefined;






export default Tracking;

