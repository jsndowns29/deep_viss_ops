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
import ObjectInstance from './ObjectInstance';
import ObjectOccurrence from './ObjectOccurrence';

/**
 * The ObjectProfile model module.
 * @module model/ObjectProfile
 * @version 1.3.0
 */
class ObjectProfile {
    /**
     * Constructs a new <code>ObjectProfile</code>.
     * @alias module:model/ObjectProfile
     */
    constructor() { 
        
        ObjectProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectProfile} obj Optional instance to populate.
     * @return {module:model/ObjectProfile} The populated <code>ObjectProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectProfile();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('collectionId')) {
                obj['collectionId'] = ApiClient.convertToType(data['collectionId'], 'String');
            }
            if (data.hasOwnProperty('croppedImageURLs')) {
                obj['croppedImageURLs'] = ApiClient.convertToType(data['croppedImageURLs'], ['String']);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('instances')) {
                obj['instances'] = ApiClient.convertToType(data['instances'], [ObjectInstance]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('occurrences')) {
                obj['occurrences'] = ApiClient.convertToType(data['occurrences'], [ObjectOccurrence]);
            }
        }
        return obj;
    }


}

/**
 * The ID of the object profile, containing several ObjectInstance. ObjectProfiles belong to ObjectCollections.
 * @member {String} id
 */
ObjectProfile.prototype['id'] = undefined;

/**
 * The ID of the object profile, containing several ObjectInstance. ObjectProfiles belong to ObjectCollections.
 * @member {String} externalId
 */
ObjectProfile.prototype['externalId'] = undefined;

/**
 * The ID of parent collection.
 * @member {String} collectionId
 */
ObjectProfile.prototype['collectionId'] = undefined;

/**
 * The list of object instances statically assigned to the object profile.
 * @member {Array.<String>} croppedImageURLs
 */
ObjectProfile.prototype['croppedImageURLs'] = undefined;

/**
 * The human-readable name of the profile
 * @member {String} displayName
 */
ObjectProfile.prototype['displayName'] = undefined;

/**
 * The list of object instances statically assigned to the object profile.
 * @member {Array.<module:model/ObjectInstance>} instances
 */
ObjectProfile.prototype['instances'] = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
ObjectProfile.prototype['attributes'] = undefined;

/**
 * The list of object instances dynamically assigned to the object profile.
 * @member {Array.<module:model/ObjectOccurrence>} occurrences
 */
ObjectProfile.prototype['occurrences'] = undefined;






export default ObjectProfile;

