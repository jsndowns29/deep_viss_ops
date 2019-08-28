# DeepVissOps.ProcessingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Image**](Image.md) |  | [optional] 
**regionsOfInterest** | [**[BoundingRectangle]**](BoundingRectangle.md) | Define any regions of interest, defined by bounding boxes, where the processing should focus. | [optional] 
**parameters** | **{String: String}** |  | [optional] 
**frameId** | **String** | Alpha-numeric, unique id of frame. You can use (timestamp+sourceId) or sha512(timestamp+sourceId) | [optional] 
**frameCounter** | **Number** | Per-source incremental frame counter | [optional] 
**sourceId** | **String** | Video source id. | [optional] 


