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


import ApiClient from "../ApiClient";
import Frame from '../model/Frame';

/**
* Frame service.
* @module api/FrameApi
* @version 1.3.0
*/
export default class FrameApi {

    /**
    * Constructs a new FrameApi. 
    * @alias module:api/FrameApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getLastFrames operation.
     * @callback module:api/FrameApi~getLastFramesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Frame>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve last frames
     * Multiple status values can be provided with comma separated strings
     * @param {Object} opts Optional parameters
     * @param {String} opts.streamId The identifier of the stream
     * @param {module:api/FrameApi~getLastFramesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Frame>}
     */
    getLastFrames(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'streamId': opts['streamId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Frame];
      return this.apiClient.callApi(
        '/stream/Frames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
