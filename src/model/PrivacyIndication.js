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
 * The PrivacyIndication model module.
 * @module model/PrivacyIndication
 * @version 1.3.0
 */
class PrivacyIndication {
    /**
     * Constructs a new <code>PrivacyIndication</code>.
     * @alias module:model/PrivacyIndication
     */
    constructor() { 
        
        PrivacyIndication.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PrivacyIndication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrivacyIndication} obj Optional instance to populate.
     * @return {module:model/PrivacyIndication} The populated <code>PrivacyIndication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrivacyIndication();

            if (data.hasOwnProperty('hasBiometricData')) {
                obj['hasBiometricData'] = ApiClient.convertToType(data['hasBiometricData'], 'Boolean');
            }
            if (data.hasOwnProperty('retentionAllowed')) {
                obj['retentionAllowed'] = ApiClient.convertToType(data['retentionAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('scheduledEvictionTime')) {
                obj['scheduledEvictionTime'] = ApiClient.convertToType(data['scheduledEvictionTime'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Does object contain biometric data?
 * @member {Boolean} hasBiometricData
 */
PrivacyIndication.prototype['hasBiometricData'] = undefined;

/**
 * Is retention of the object allowed?
 * @member {Boolean} retentionAllowed
 */
PrivacyIndication.prototype['retentionAllowed'] = undefined;

/**
 * Date and time expressed according to ISO 8601 (e.g. 2018-06-24T23:10:28+03:00) of when this data is expected to be collected.
 * @member {String} scheduledEvictionTime
 */
PrivacyIndication.prototype['scheduledEvictionTime'] = undefined;






export default PrivacyIndication;
