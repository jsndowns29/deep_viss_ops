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
import BoundingRectangle from './BoundingRectangle';
import Orientation from './Orientation';
import Point2D from './Point2D';

/**
 * The Detection model module.
 * @module model/Detection
 * @version 1.3.0
 */
class Detection {
    /**
     * Constructs a new <code>Detection</code>.
     * @alias module:model/Detection
     */
    constructor() { 
        
        Detection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Detection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Detection} obj Optional instance to populate.
     * @return {module:model/Detection} The populated <code>Detection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Detection();

            if (data.hasOwnProperty('boundingRectangle')) {
                obj['boundingRectangle'] = BoundingRectangle.constructFromObject(data['boundingRectangle']);
            }
            if (data.hasOwnProperty('orientation')) {
                obj['orientation'] = Orientation.constructFromObject(data['orientation']);
            }
            if (data.hasOwnProperty('algorithm')) {
                obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
            }
            if (data.hasOwnProperty('keypoints')) {
                obj['keypoints'] = ApiClient.convertToType(data['keypoints'], [Point2D]);
            }
            if (data.hasOwnProperty('segmentedKeypoints')) {
                obj['segmentedKeypoints'] = ApiClient.convertToType(data['segmentedKeypoints'], [Object]);
            }
            if (data.hasOwnProperty('confidence')) {
                obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BoundingRectangle} boundingRectangle
 */
Detection.prototype['boundingRectangle'] = undefined;

/**
 * @member {module:model/Orientation} orientation
 */
Detection.prototype['orientation'] = undefined;

/**
 * What type of algorithm performed the detection
 * @member {String} algorithm
 */
Detection.prototype['algorithm'] = undefined;

/**
 * What are the keypoints of the object??
 * @member {Array.<module:model/Point2D>} keypoints
 */
Detection.prototype['keypoints'] = undefined;

/**
 * What are the keypoints of the object??
 * @member {Array.<Object.<String, Array.<module:model/Point2D>>>} segmentedKeypoints
 */
Detection.prototype['segmentedKeypoints'] = undefined;

/**
 * What is the confidence of the detection
 * @member {Number} confidence
 */
Detection.prototype['confidence'] = undefined;






export default Detection;

