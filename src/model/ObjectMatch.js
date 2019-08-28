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
 * The ObjectMatch model module.
 * @module model/ObjectMatch
 * @version 1.3.0
 */
class ObjectMatch {
    /**
     * Constructs a new <code>ObjectMatch</code>.
     * @alias module:model/ObjectMatch
     */
    constructor() { 
        
        ObjectMatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectMatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectMatch} obj Optional instance to populate.
     * @return {module:model/ObjectMatch} The populated <code>ObjectMatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectMatch();

            if (data.hasOwnProperty('matchType')) {
                obj['matchType'] = ApiClient.convertToType(data['matchType'], 'String');
            }
            if (data.hasOwnProperty('algorithm')) {
                obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], 'String');
            }
            if (data.hasOwnProperty('collectionId')) {
                obj['collectionId'] = ApiClient.convertToType(data['collectionId'], 'String');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
            if (data.hasOwnProperty('matchRate')) {
                obj['matchRate'] = ApiClient.convertToType(data['matchRate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The match with an object
 * @member {String} matchType
 */
ObjectMatch.prototype['matchType'] = undefined;

/**
 * The name and version of the algorithm used for feature extraction
 * @member {String} algorithm
 */
ObjectMatch.prototype['algorithm'] = undefined;

/**
 * The ID of the collection from which the match was made
 * @member {String} metric
 */
ObjectMatch.prototype['metric'] = undefined;

/**
 * The ID of the collection from which the match was made
 * @member {String} collectionId
 */
ObjectMatch.prototype['collectionId'] = undefined;

/**
 * The ID of the profile that was matched.
 * @member {String} profileId
 */
ObjectMatch.prototype['profileId'] = undefined;

/**
 * The ID of the profile that was matched.
 * @member {Number} matchRate
 */
ObjectMatch.prototype['matchRate'] = undefined;






export default ObjectMatch;

