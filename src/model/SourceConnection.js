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
 * The SourceConnection model module.
 * @module model/SourceConnection
 * @version 1.3.0
 */
class SourceConnection {
    /**
     * Constructs a new <code>SourceConnection</code>.
     * @alias module:model/SourceConnection
     * @param url {String} The hostname of the video source
     * @param protocol {module:model/SourceConnection.ProtocolEnum} The protocol used to connect to the video source
     */
    constructor(url, protocol) { 
        
        SourceConnection.initialize(this, url, protocol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, protocol) { 
        obj['url'] = url;
        obj['protocol'] = protocol;
    }

    /**
     * Constructs a <code>SourceConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceConnection} obj Optional instance to populate.
     * @return {module:model/SourceConnection} The populated <code>SourceConnection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceConnection();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The hostname of the video source
 * @member {String} url
 */
SourceConnection.prototype['url'] = undefined;

/**
 * The username used for authentication to the video source
 * @member {String} username
 */
SourceConnection.prototype['username'] = undefined;

/**
 * The password used for authentication to the video source
 * @member {String} password
 */
SourceConnection.prototype['password'] = undefined;

/**
 * The protocol used to connect to the video source
 * @member {module:model/SourceConnection.ProtocolEnum} protocol
 */
SourceConnection.prototype['protocol'] = undefined;





/**
 * Allowed values for the <code>protocol</code> property.
 * @enum {String}
 * @readonly
 */
SourceConnection['ProtocolEnum'] = {

    /**
     * value: "jpeg_snapshot"
     * @const
     */
    "jpeg_snapshot": "jpeg_snapshot",

    /**
     * value: "mjpeg"
     * @const
     */
    "mjpeg": "mjpeg",

    /**
     * value: "h264_http"
     * @const
     */
    "h264_http": "h264_http",

    /**
     * value: "hls"
     * @const
     */
    "hls": "hls",

    /**
     * value: "webrtc"
     * @const
     */
    "webrtc": "webrtc",

    /**
     * value: "image_push"
     * @const
     */
    "image_push": "image_push",

    /**
     * value: "video_push"
     * @const
     */
    "video_push": "video_push"
};



export default SourceConnection;

