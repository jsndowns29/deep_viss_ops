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
import Metric from './Metric';
import PrivacyIndication from './PrivacyIndication';

/**
 * The Features model module.
 * @module model/Features
 * @version 1.3.0
 */
class Features {
    /**
     * Constructs a new <code>Features</code>.
     * @alias module:model/Features
     */
    constructor() { 
        
        Features.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Features</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Features} obj Optional instance to populate.
     * @return {module:model/Features} The populated <code>Features</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Features();

            if (data.hasOwnProperty('algorithm')) {
                obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
            }
            if (data.hasOwnProperty('privacy')) {
                obj['privacy'] = PrivacyIndication.constructFromObject(data['privacy']);
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = Metric.constructFromObject(data['metric']);
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('vector')) {
                obj['vector'] = ApiClient.convertToType(data['vector'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The name and version of the algorithm used for feature extraction
 * @member {String} algorithm
 */
Features.prototype['algorithm'] = undefined;

/**
 * @member {module:model/PrivacyIndication} privacy
 */
Features.prototype['privacy'] = undefined;

/**
 * @member {module:model/Metric} metric
 */
Features.prototype['metric'] = undefined;

/**
 * The value of the metric threshold
 * @member {Number} threshold
 */
Features.prototype['threshold'] = undefined;

/**
 * The hash of the features, for quick exact-match look-up
 * @member {String} hash
 */
Features.prototype['hash'] = undefined;

/**
 * N-dimensional feature vector of numerical features representing the unique signature of the object
 * @member {Array.<Number>} vector
 */
Features.prototype['vector'] = undefined;






export default Features;

