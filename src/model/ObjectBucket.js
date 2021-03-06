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
 * The ObjectBucket model module.
 * @module model/ObjectBucket
 * @version 1.3.0
 */
class ObjectBucket {
    /**
     * Constructs a new <code>ObjectBucket</code>.
     * [TODO: Object definition] Unsorted and unassigned set of object occurences, which can server for clustering and later historical-matching.
     * @alias module:model/ObjectBucket
     */
    constructor() { 
        
        ObjectBucket.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectBucket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectBucket} obj Optional instance to populate.
     * @return {module:model/ObjectBucket} The populated <code>ObjectBucket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectBucket();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the bucket of object instances
 * @member {String} id
 */
ObjectBucket.prototype['id'] = undefined;






export default ObjectBucket;

