# DeepVissOps.FrameApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLastFrames**](FrameApi.md#getLastFrames) | **GET** /stream/Frames | Retrieve last frames



## getLastFrames

> [Frame] getLastFrames(opts)

Retrieve last frames

Multiple status values can be provided with comma separated strings

### Example

```javascript
import DeepVissOps from 'deep_viss_ops';

let apiInstance = new DeepVissOps.FrameApi();
let opts = {
  'streamId': "streamId_example" // String | The identifier of the stream
};
apiInstance.getLastFrames(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | **String**| The identifier of the stream | [optional] 

### Return type

[**[Frame]**](Frame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

