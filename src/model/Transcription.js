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
 * The Transcription model module.
 * @module model/Transcription
 * @version 1.3.0
 */
class Transcription {
    /**
     * Constructs a new <code>Transcription</code>.
     * @alias module:model/Transcription
     */
    constructor() { 
        
        Transcription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Transcription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transcription} obj Optional instance to populate.
     * @return {module:model/Transcription} The populated <code>Transcription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transcription();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('confidence')) {
                obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the collection from which the match was made
 * @member {String} text
 */
Transcription.prototype['text'] = undefined;

/**
 * @member {Number} confidence
 */
Transcription.prototype['confidence'] = undefined;






export default Transcription;

