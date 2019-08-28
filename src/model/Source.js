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
import GeoPosition from './GeoPosition';
import SourceConnection from './SourceConnection';

/**
 * The Source model module.
 * @module model/Source
 * @version 1.3.0
 */
class Source {
    /**
     * Constructs a new <code>Source</code>.
     * @alias module:model/Source
     * @param id {String} Internal alphanumeric ID of video source
     * @param name {String} Human-readable name of video source
     */
    constructor(id, name) { 
        
        Source.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('stateless')) {
                obj['stateless'] = ApiClient.convertToType(data['stateless'], 'Boolean');
            }
            if (data.hasOwnProperty('bounded')) {
                obj['bounded'] = ApiClient.convertToType(data['bounded'], 'Boolean');
            }
            if (data.hasOwnProperty('fixedPosition')) {
                obj['fixedPosition'] = ApiClient.convertToType(data['fixedPosition'], 'Boolean');
            }
            if (data.hasOwnProperty('Position')) {
                obj['Position'] = ApiClient.convertToType(data['Position'], GeoPosition);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], SourceConnection);
            }
        }
        return obj;
    }


}

/**
 * Internal alphanumeric ID of video source
 * @member {String} id
 */
Source.prototype['id'] = undefined;

/**
 * Human-readable name of video source
 * @member {String} name
 */
Source.prototype['name'] = undefined;

/**
 * Vendor of the camera
 * @member {String} vendor
 */
Source.prototype['vendor'] = undefined;

/**
 * Model of the camera
 * @member {String} model
 */
Source.prototype['model'] = undefined;

/**
 * Set to true if stream is expected to have non-continous frames.
 * @member {Boolean} stateless
 */
Source.prototype['stateless'] = undefined;

/**
 * Set to true if stream represents a finite-duration video (like a movie upload)
 * @member {Boolean} bounded
 */
Source.prototype['bounded'] = undefined;

/**
 * Set to true if camera is expected to move.
 * @member {Boolean} fixedPosition
 */
Source.prototype['fixedPosition'] = undefined;

/**
 * The geographic (physical) position of the camera
 * @member {module:model/GeoPosition} Position
 */
Source.prototype['Position'] = undefined;

/**
 * Details on connection.
 * @member {module:model/SourceConnection} connection
 */
Source.prototype['connection'] = undefined;






export default Source;

