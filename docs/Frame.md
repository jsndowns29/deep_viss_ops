# DeepVissOps.Frame

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamps** | [**[FrameTimestamp]**](FrameTimestamp.md) | Defines the several timestamps of acquisition, reception, pre-processing and post-processing respectively. | [optional] 
**frameId** | **String** | Alpha-numeric, unique id of frame. You can use (timestamp+sourceId) or sha512(timestamp+sourceId) | [optional] 
**frameCounter** | **Number** | Per-source incremental frame counter | [optional] 
**sourceId** | **String** | Video source id. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**events** | [**[Event]**](Event.md) |  | [optional] 
**timing** | **{String: Number}** |  | [optional] 
**debug** | **{String: Object}** |  | [optional] 


