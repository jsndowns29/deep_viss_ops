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


import ApiClient from './ApiClient';
import Attribute from './model/Attribute';
import BoundingRectangle from './model/BoundingRectangle';
import Detection from './model/Detection';
import Event from './model/Event';
import Features from './model/Features';
import Frame from './model/Frame';
import FrameTimestamp from './model/FrameTimestamp';
import GeoPosition from './model/GeoPosition';
import Image from './model/Image';
import Metric from './model/Metric';
import ObjectBucket from './model/ObjectBucket';
import ObjectCollection from './model/ObjectCollection';
import ObjectInstance from './model/ObjectInstance';
import ObjectMatch from './model/ObjectMatch';
import ObjectOccurrence from './model/ObjectOccurrence';
import ObjectProfile from './model/ObjectProfile';
import Orientation from './model/Orientation';
import PackedPrefetch from './model/PackedPrefetch';
import PackedSight from './model/PackedSight';
import Point2D from './model/Point2D';
import PrivacyIndication from './model/PrivacyIndication';
import ProcessingRequest from './model/ProcessingRequest';
import Source from './model/Source';
import SourceConnection from './model/SourceConnection';
import SourceStatus from './model/SourceStatus';
import Tracking from './model/Tracking';
import Transcription from './model/Transcription';
import AnalysisApi from './api/AnalysisApi';
import FrameApi from './api/FrameApi';


/**
* DeepVISS__Deep_Vision_Interoperability_Specification_Standard_allows_several_computer_vision_solutions_to_produce_consume_and_exchange_events_in_the_same_format_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DeepVissOps = require('index'); // See note below*.
* var xxxSvc = new DeepVissOps.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DeepVissOps.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DeepVissOps.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DeepVissOps.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.3.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Attribute model constructor.
     * @property {module:model/Attribute}
     */
    Attribute,

    /**
     * The BoundingRectangle model constructor.
     * @property {module:model/BoundingRectangle}
     */
    BoundingRectangle,

    /**
     * The Detection model constructor.
     * @property {module:model/Detection}
     */
    Detection,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The Features model constructor.
     * @property {module:model/Features}
     */
    Features,

    /**
     * The Frame model constructor.
     * @property {module:model/Frame}
     */
    Frame,

    /**
     * The FrameTimestamp model constructor.
     * @property {module:model/FrameTimestamp}
     */
    FrameTimestamp,

    /**
     * The GeoPosition model constructor.
     * @property {module:model/GeoPosition}
     */
    GeoPosition,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The Metric model constructor.
     * @property {module:model/Metric}
     */
    Metric,

    /**
     * The ObjectBucket model constructor.
     * @property {module:model/ObjectBucket}
     */
    ObjectBucket,

    /**
     * The ObjectCollection model constructor.
     * @property {module:model/ObjectCollection}
     */
    ObjectCollection,

    /**
     * The ObjectInstance model constructor.
     * @property {module:model/ObjectInstance}
     */
    ObjectInstance,

    /**
     * The ObjectMatch model constructor.
     * @property {module:model/ObjectMatch}
     */
    ObjectMatch,

    /**
     * The ObjectOccurrence model constructor.
     * @property {module:model/ObjectOccurrence}
     */
    ObjectOccurrence,

    /**
     * The ObjectProfile model constructor.
     * @property {module:model/ObjectProfile}
     */
    ObjectProfile,

    /**
     * The Orientation model constructor.
     * @property {module:model/Orientation}
     */
    Orientation,

    /**
     * The PackedPrefetch model constructor.
     * @property {module:model/PackedPrefetch}
     */
    PackedPrefetch,

    /**
     * The PackedSight model constructor.
     * @property {module:model/PackedSight}
     */
    PackedSight,

    /**
     * The Point2D model constructor.
     * @property {module:model/Point2D}
     */
    Point2D,

    /**
     * The PrivacyIndication model constructor.
     * @property {module:model/PrivacyIndication}
     */
    PrivacyIndication,

    /**
     * The ProcessingRequest model constructor.
     * @property {module:model/ProcessingRequest}
     */
    ProcessingRequest,

    /**
     * The Source model constructor.
     * @property {module:model/Source}
     */
    Source,

    /**
     * The SourceConnection model constructor.
     * @property {module:model/SourceConnection}
     */
    SourceConnection,

    /**
     * The SourceStatus model constructor.
     * @property {module:model/SourceStatus}
     */
    SourceStatus,

    /**
     * The Tracking model constructor.
     * @property {module:model/Tracking}
     */
    Tracking,

    /**
     * The Transcription model constructor.
     * @property {module:model/Transcription}
     */
    Transcription,

    /**
    * The AnalysisApi service constructor.
    * @property {module:api/AnalysisApi}
    */
    AnalysisApi,

    /**
    * The FrameApi service constructor.
    * @property {module:api/FrameApi}
    */
    FrameApi
};
