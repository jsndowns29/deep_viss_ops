# DeepVissOps.Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal alphanumeric ID of video source | 
**name** | **String** | Human-readable name of video source | 
**vendor** | **String** | Vendor of the camera | [optional] 
**model** | **String** | Model of the camera | [optional] 
**stateless** | **Boolean** | Set to true if stream is expected to have non-continous frames. | [optional] 
**bounded** | **Boolean** | Set to true if stream represents a finite-duration video (like a movie upload) | [optional] 
**fixedPosition** | **Boolean** | Set to true if camera is expected to move. | [optional] 
**position** | [**GeoPosition**](GeoPosition.md) | The geographic (physical) position of the camera | [optional] 
**connection** | [**SourceConnection**](SourceConnection.md) | Details on connection. | [optional] 


