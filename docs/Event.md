# DeepVissOps.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **String** | What type of event has been detected? | [optional] 
**id** | **String** | Unique or almost-unique hash or identifier of the detected event. Can be computed as dependant on frame timestamp, position of detection and event type. | [optional] 
**attributes** | [**[Attribute]**](Attribute.md) | What are the inferred attributes of the object? | [optional] 
**tracking** | [**Tracking**](Tracking.md) |  | [optional] 
**detection** | [**Detection**](Detection.md) |  | [optional] 
**features** | [**Features**](Features.md) |  | [optional] 
**featuresMap** | [**[Features]**](Features.md) | What are the secondary features extracted from the detected object? | [optional] 
**processedImage** | [**Image**](Image.md) |  | [optional] 


