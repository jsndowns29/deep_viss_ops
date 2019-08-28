# DeepVissOps.ObjectCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the collection | [optional] 
**name** | **String** | The human-readable name of the collection | [optional] 
**objectType** | **String** | The type of objects in the collection. A collection can only hold objects of the same type. | [optional] 
**algorithm** | **String** | The name and version of the algorithm used for feature extraction. A collection can only hold objects with the same feature space (latent space). | [optional] 
**metric** | [**Metric**](Metric.md) |  | [optional] 
**threshold** | **Number** | The recommended metric value recommended to be used as threshold | [optional] 
**profiles** | [**ObjectProfile**](ObjectProfile.md) |  | [optional] 


